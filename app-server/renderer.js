import { renderToString } from 'react-dom/server';
import React from 'react';
import * as path from 'path';
import App, { AppContext } from './App';

// Load component for module federation container;
async function loadComponent() {
  await __webpack_init_sharing__("default");
  const containerPath = path.resolve(process.cwd(), './widget-builder/dist/container.js');
  const container = __non_webpack_require__(containerPath);
  const module = await container.get("widget");
  return module().default;
}

export default async (req, res, next) => {
  const Module = await loadComponent();

  res.send(renderToString(<Module propValue={'propValue'} />));
  // res.send(renderToString(<App><Module context={AppContext}/></App>));
};
