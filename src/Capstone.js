import React, { Component } from 'react';
import logo from './goku-head.png';
import './Capstone.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from './ApplicationViews';


class Capstone extends Component {
  render() {
    return (
      <div className="Capstone">
        <header className="Capstone-header">
          <img src={logo} className="Capstone-logo" alt="logo" />
          <div>
            <button onClick={() => {
              localStorage.clear("credentials")
              document.location.href = 'http://localhost:3000'
            }}
              className="logoutButton">Logout</button>
          </div>
        </header>
        <ApplicationViews />
      </div>
    );
  }
}

export default Capstone;
