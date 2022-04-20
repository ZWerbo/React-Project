import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillStar } from 'react-icons/ai'

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        var sum = 0; 
        var count = 0;
        this.props.reviews.map(review => {
            if(review.restaurant_id === this.props.restaurant.id) {
                sum += review.rating
                count++
            }
        })
        var average = Math.floor(sum / count)
        var mapStar = [];
        for(let i = 0; i < average; i++) {
            mapStar.push('undefined')
        }
        return (
         

            <Link className='link1' to={`/restaurants/${this.props.restaurant.id}`}>
            <div className="restaurant-index-inside">

                <img className="image-index" src={this.props.restaurant.photos_url[0]}/>
                <h1 className="restaurant-index-header">{this.props.restaurant.name}</h1> 

                <div className="star-reviewcount">

                <p className="star-index-rating">   {mapStar.map(star => {
                    return <AiFillStar color="red" />})}</p> 
                    <p className="review-count">{count} Reviews</p> 
                    <p className="cuisine-index">{this.props.restaurant.cuisine}</p> 
                </div>
                <div className="time-buttons-index-container">
                    <div className="buffer-time-buttons"></div>
                    <div className="time-button-index-container">
                    <button className="time-button-index">7:30pm</button>
                    </div>
                    <div className="time-button-index-container">
                    <button className="time-button-index"> 7:45pm</button>
                    </div>
                    <div className="time-button-index-container">
                    <button className="time-button-index" >8:00pm</button>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}

export default RestaurantIndexItem