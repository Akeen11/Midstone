import React, { Component } from "react"
import "./Manga.css"

export default class MangaDetail extends Component {

    render() {

        const manga = this.props.manga.find(a => a.i === this.props.match.params.mangaId, 0) || {}

        return (
            <section className="manga">
                <div key={manga.i} className="card">
                    <div className="card-body">
                        <div className="card-title">
                        <a href={`https://cdn.mangaeden.com/mangasimg/${manga.im}`}>{manga.im}</a>
                            <h4>{manga.t}</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}