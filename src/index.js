import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import 'antd/dist/antd.css';
import * as serviceWorker from './Worker/serviceWorker';

function MyApp(){
  return (
    <App />
  );
}

ReactDOM.render(
  <MyApp />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
