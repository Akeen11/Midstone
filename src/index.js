import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Capstone from './Capstone';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <Capstone />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
