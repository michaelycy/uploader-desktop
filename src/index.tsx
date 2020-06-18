import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppView from './views';
import 'mobx-react-lite/batchingForReactDom';

const rootDom = document.getElementById('root');
if (rootDom) {
  rootDom.style.height = '100%';
}

ReactDOM.render(
  // <React.StrictMode>
  <AppView />,
  // </React.StrictMode>
  rootDom
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
