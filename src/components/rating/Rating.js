import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import DataManager from '../../modules/DataManager'

export default class StarRating extends Component {
    constructor() {
        super();

        this.state = {
            rating: 0
        }
    }

    onStarClick(nextValue, prevValue) {

        this.setState({ rating: nextValue })

        const detail = {
            rating: this.state.rating,
            favorite: false
        }

        DataManager.add('detail', detail)

        const localRating = DataManager.get('detail', 'rating')
        console.log(localRating)
    }
    
    render() {
        
        const { rating } = this.state;
        
        
        

        


        return (
            <div>
                <h2>Rate: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.localRating}
                    onStarClick={
                        this.onStarClick.bind(this)
                    }
                />
                <hr />
            </div>
        );
    }
}