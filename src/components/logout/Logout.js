import React, { Component } from 'react'
import './Logout.css'

export default class Logout extends Component {

    render() {

        return (

            <div className="logoutButton">
                <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href = 'http://localhost:3000'
                }}>Logout</button>
            </div>

        )
    }
}