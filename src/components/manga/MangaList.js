import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom"
import SearchBar from "../searchbar/SearchBar";
import './MangaList.css'

export default class MangaList extends Component {

    render() {
        return (
            <React.Fragment>
                <SearchBar {...this.props} />
                <section className="title">
                    {
                        this.props.manga.map(manga =>
                            <Card id={`manga--${manga.i}`} key={manga.i} className="cards">
                                <img width="100%" src={manga.im} alt="Card cap" className="image" />
                                <CardBody>
                                    <CardTitle>{manga.t}</CardTitle>
                                    <Link className="cardnav-link" to={`/manga/${manga.i}`}>Details</Link>
                                </CardBody>
                            </Card>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}