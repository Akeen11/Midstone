import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Favorite.css'

export default class Favorite extends Component {

    render() {
        const detail = this.props.detail.find(
            detail => detail.mangaId === this.props.match.params.mangaId
        ) || {}

        const icon = ""

        const favorite = { isFavorited: true }

        return (

            <div>
                <h2>Favorite:</h2>
                <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() =>
                        this.props.editDetail(detail.id, favorite)
                    }
                    className= { `${icon}` }
                    id="heartIcon" />
            </div>

        )
    }

}