import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Favorite from './Favorite'
import DataManager from '../../modules/DataManager'
import './Rating.css'

export default class StarRating extends Component {
    constructor() {
        super();

        this.state = {
            rating: 0
        }
    }

    onStarClick(nextValue) {

        this.setState({ rating: nextValue }, this.setRating)

    }

    setRating() {
        const detail = {
            rating: this.state.rating,
            isFavorited: false,
            mangaId: this.props.match.params.mangaId
        }

        DataManager.add('detail', detail)
    }

    componentDidMount() {

        DataManager.getReview('detail', this.props.match.params.mangaId)
            .then(rating => {
                if (rating) {
                    this.setState({ rating: rating[rating.length - 1].rating})
                }
            })
    }
    render() {
        const { rating } = this.state;

        return (
            <div className="ratings">
                <div id={this.props.mangaId} className="stars">
                    <h2>Rate:</h2>
                    <StarRatingComponent
                        name='1'
                        starCount={5}
                        value={rating}
                        onStarClick={
                            this.onStarClick.bind(this)
                        }
                        starColor={'red'}
                        emptyStarColor={'white'}
                    />
                </div>
                <div>
                    <Favorite {...this.props}/>
                </div>
                <hr />
            </div>
        );
    }
}