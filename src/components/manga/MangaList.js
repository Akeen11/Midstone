import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Manga.css'

export default class MangaList extends Component {


    render() {

        return (
            <section className="title">
                {
                    this.props.manga.map(manga =>
                        <div id={`manga--${manga.i}`} key={manga.i} className="card">
                            <div className="card-body">
                                <section className="card-title">
                                    <div className="cardImage">
                                        <img src={this.props.image} />
                                    </div>
                                    <h4>{manga.a}</h4>
                                    <Link className="cardnav-link" to={`/manga/${manga.i}`}>Details</Link>
                                </section>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}