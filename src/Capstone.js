import React, { Component } from 'react';
import logo from './goku-head.png';
import './Capstone.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from './ApplicationViews';
import Logout from './components/logout/Logout'


export default class Capstone extends Component {
  render() {
    return (
      <div className="Capstone">
        <header className="Capstone-header">
          <img src={logo} className="Capstone-logo" alt="logo" />
          <Logout />
        </header>
        <ApplicationViews />
      </div>
    );
  }
}


