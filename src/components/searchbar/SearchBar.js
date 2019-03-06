import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

    search(evt) {
        this.props.manga.includes(
            this.props.manga.map(manga => 
                manga.a === evt.target.value))
        console.log(evt.target.value)
    }

    render() {

        return (

            <form className="searchbar">
                <div className="searchbar-inner">
                    <div className="searchbar-input-wrap">
                        <input type="search" placeholder="Search" id="search" onInput={e => this.search(e)} />
                        <span className="input-clear-button"></span>
                    </div>
                </div>
            </form>

        )
    }
}