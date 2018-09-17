import React, { Component } from 'react'
import './SearchBar.css'

export default class Search extends Component {

    onKeyDown() {
        this.props.manga.includes('')
    }

    render() {

        return (

            <form className="searchbar">
                <div className="searchbar-inner">
                    <div className="searchbar-input-wrap">
                        <input type="search" placeholder="Search" onKeyDown={this.onKeyDown} />
                        <span className="input-clear-button"></span>
                    </div>
                    <span className="searchbar-disable-button">Cancel</span>
                </div>
            </form>

        )
    }
}