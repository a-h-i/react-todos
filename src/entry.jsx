import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
const data = 'Hello ';
ReactDOM.render(
  <div>{data}</div>,
  document.getElementById('app')
);

module.hot.accept();