import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/AppList'; // Assuming AppList is the main component
import './index.css'; // Import global styles if any

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);