import React, { Component } from 'react';
import logo from './goku-head.png';
import './Capstone.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from './ApplicationViews';
import UserButton from './components/userbutton/UserButton'
import Logout from './components/logout/Logout'
import Footer from './components/footer/Footer'


export default class Capstone extends Component {
  render() {
    return (
      <div className="Capstone">
        <header className="Capstone-header">
          <UserButton />
          <a href="/manga"> <img src={logo} className="Capstone-logo" alt="logo" /></a>
          <Logout />
        </header>
        <ApplicationViews />
        <Footer />
      </div>
    );
  }
}


