import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Favorite.css'

export default class Favorite extends Component {

    render() {
        const detail = this.props.detail.find(
            detail => detail.mangaId === this.props.match.params.mangaId
        ) || {}

        const favorite = { isFavorited: true }
        if (detail.isFavorited === true) {
            return <React.Fragment>
                <h2>Favorite:</h2>
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() =>
                        this.props.editDetail(detail.id, favorite)
                    }
                    className="favorited"
                    id="heartIcon" />
            </React.Fragment>
        } else {
            return <div>
                <h2>Favorite:</h2>
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() =>
                        this.props.editDetail(detail.id, favorite)
                    }
                    className="heart"
                    id="heartIcon" />
            </div>
        }

    }

}