import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app/App.js';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

