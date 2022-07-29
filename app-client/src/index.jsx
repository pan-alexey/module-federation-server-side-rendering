import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

(async () => {
  const container = document.getElementById('root');
  if (container.hasChildNodes()) {
    console.log('hydrate');
    ReactDOM.hydrate(<App />, document.getElementById('root'));
  } else {
    console.log('render');
    ReactDOM.render(<App />, container);
  }
})()
