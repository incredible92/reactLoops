import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import AppLoopRoutes from './AppLoopRoutes'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppLoopRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


