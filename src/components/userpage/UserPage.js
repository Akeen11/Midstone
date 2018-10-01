import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './UserPage.css'

export default class UserPage extends Component {

    componentDidMount() {

    }

    render() {
        const detail = this.props.detail.find(
            detail => detail.mangaId === this.props.match.params.mangaId
        ) || {}

        const favorite = { isFavorited: false }

        const user = JSON.parse(localStorage.getItem("credentials"))



        return (
            <div className="users">
                <h1>Name: {user.username}</h1>
                <p>Email: {user.email}</p>
                <img src={`/cardimages/userimage.jpg`} alt="" />
                <br />
                <br />
                <br />
                <br />
                <div className="title">
                    <h3>Favorites:</h3>
                </div>
                <div className="allDetails">
                    <div className="theDetails">
                        <img src={`/cardimages/my-hero-academia.png`} alt="" />
                        <div>
                            <p>Unfavorite:</p>
                            <FontAwesomeIcon
                                icon={faHeartbeat}
                                onClick={() =>
                                    this.props.editDetail(detail.id, favorite)
                                }
                                id="heartIcon" />
                        </div>

                    </div>
                    <div className="theDetails">
                        <img src={`/cardimages/dragon-ball-super.jpg`} alt="" />
                        <div>
                            <p>Unfavorite:</p>
                            <FontAwesomeIcon
                                icon={faHeartbeat}
                                onClick={() =>
                                    this.props.editDetail(detail.id, favorite)
                                }
                                id="heartIcon" />
                        </div>

                    </div>
                </div>
                <br />
                <br />

            </div>

        )
    }
}