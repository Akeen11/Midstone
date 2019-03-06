import React, { Component } from 'react'
import { Card, CardBody, CardTitle, Input } from 'reactstrap';
import { Link } from "react-router-dom"
import './MangaList.css'

export default class MangaList extends Component {

    state = {
        search: ""
    }

    updateSearch(e) {
        this.setState({search: e.target.value.substr(0, 20)})
    }

    render() {

        let manga = [];
        if(this.state.search.length !== 0){
            manga = this.props.manga.filter(manga => {
                return manga.t.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1, 
                console.log(manga.t.indexOf(this.state.search));
            })
        }

        return (
            <React.Fragment>
                <div>
                    <Input icon="search" iconposition="left" bsSize="large" className="input-margin" onChange={this.updateSearch.bind(this)} value={this.state.search} type="text" placeholder="Search"></Input>
                </div>
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