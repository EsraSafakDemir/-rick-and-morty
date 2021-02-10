import React from 'react';
import ReactDOM from 'react-dom';
import { Button, DatePicker, version } from "antd";

import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { message, Alert } from 'antd';
import 'antd/dist/antd.css';


ReactDOM.render(
  <div className="App">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>,
  document.getElementById("root")
);



