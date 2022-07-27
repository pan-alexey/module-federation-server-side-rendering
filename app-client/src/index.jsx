import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

(async () => {

  // ReactDOM.render( <App/>, document.getElementById('root'),)
  // console.log(container)
  ReactDOM.hydrate(<App />, document.getElementById('root'));


  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );
  // root.render(<App />);
})()

