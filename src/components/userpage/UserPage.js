import React, { Component } from 'react'
import './UserPage.css'

export default class UserPage extends Component {

    render() {

        const user = JSON.parse(localStorage.getItem("credentials"))

        return(

            <h1>{user.username}</h1>
            
        )
    }
}