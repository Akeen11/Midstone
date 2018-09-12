import React, { Component } from 'react'
import './Homepage.css'

export default class HomePage extends Component {

    render() {
        
        return (
            <React.Fragment>
                <div className="homeButtons">
                    <div className="loginButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/login")
                            }
                            }>Login</button>
                    </div>
                    <div className="registerButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/register")
                            }
                            }>Create Account</button>
                    </div>
                </div>
                    
            </React.Fragment>
        )

    }

}