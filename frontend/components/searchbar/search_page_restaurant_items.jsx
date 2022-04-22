import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillStar } from 'react-icons/ai'

class SearchPageRestaurantItem extends React.Component {
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
         

            <Link className='search-link1' to={`/restaurants/${this.props.restaurant.id}`}>
        <div className="search-page-restaurant-index-inside">

            <div className="image-rest-info-container">

                <img className="searchpage-rest-image" src={this.props.restaurant.photos_url[0]}/>

                <div className="rest-info">
                    <h1 className="searchpage-restaurant-index-header">{this.props.restaurant.name}</h1> 
                    <div className="rest-rate-review">

                        <div className="star-search-rating">   {mapStar.map(star => {
                            return <AiFillStar color="red" />})}</div> 
                            <div className="review-count">{count} Reviews</div> 
                            <div className="cuisine-index">{this.props.restaurant.cuisine}</div> 
                            </div>

                            <div className="search-buffer-div"></div>
                            <div className="searchpage-times-buttons">
                                <div className="buffer-time-buttons"></div>
                                <div className="time-button-index-container">
                                <button className="time-button-index">7:15pm</button>
                                </div>
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
            </div>
         
    

                            {/* <div className="searchpage-times-buttons">
                                <div className="buffer-time-buttons"></div>
                                <div className="time-button-index-container">
                                <button className="time-button-index">7:15pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index">7:30pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index"> 7:45pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index" >8:00pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index" >8:15pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index" >8:30pm</button>
                                </div>
                                <div className="time-button-index-container">
                                <button className="time-button-index" >8:45pm</button>
                                </div>
                            </div> */}



            </div>
            </Link>
        )
    }
}

export default SearchPageRestaurantItem