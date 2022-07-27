import express from 'express';

import { renderToString } from 'react-dom/server';
import React from 'react';
import * as path from 'path';
import * as fs from 'fs';
import renderHtml from './renderHtml';


const fileExists = async path => !!(await fs.promises.stat(path).catch(e => false));

async function loadComponent(name = '') {
  const containerPath = path.resolve(process.cwd(), `./app-server/assets/${name}/server/container.js`);
  const isExistModule = await fileExists(containerPath);

  if (!isExistModule) {
    console.log('Module is not exist:', containerPath);
    return null;
  }

  await __webpack_init_sharing__("default");
  const container = __non_webpack_require__(containerPath);
  const module = await container.get("widget");
  return module().default;
}

const app = express();

app.use('/assets', express.static(process.cwd() + '/app-server/assets'));

app.get('/', async (req, res) => {
  const Widget1 = await loadComponent('widget-1');
  const Widget2 = await loadComponent('widget-2');

  if (!Widget1 || !Widget2) {
    res.write(renderHtml());
    return res.end();
  }

  const root = renderToString(<div>
    <Widget1 propValue={'propValue'}/>
    <hr/>
    <Widget2 propValue={'propValue'}/>
  </div>)
  res.send(renderHtml(root));
  return res.end();
})

app.listen(3000, () => {
  console.log(`Server is listening on port: http://localhost:3000`);
});
