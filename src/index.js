import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// const [,,lamp] = ["boots", "tent", "headlamp"];
// console.log(lamp);

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App /* authorized={false} id="2" */ />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
