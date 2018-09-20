import React, { Component } from 'react'
import './SearchBar.css'

export default class Search extends Component {

    onKeyDown(evt) {
        console.log(evt.target.value)
        this.props.manga.includes(evt.target.value)
    }
    render() {
        
        
        return (

            <form className="searchbar">
                <div className="searchbar-inner">
                    <div className="searchbar-input-wrap">
                        <input type="search" placeholder="Search" id="search" onInput={e => this.onKeyDown(e)} />
                        <span className="input-clear-button"></span>
                    </div>
                    <span className="searchbar-disable-button">Cancel</span>
                </div>
            </form>

        )
    }
}