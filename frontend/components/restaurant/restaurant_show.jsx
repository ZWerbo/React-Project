import React from "react";
import ReviewIndexContainer from "../review/review_index_container";
import { Link } from "react-router-dom";
import CreateReview from "../review/review_form"
import { HashLink } from 'react-router-hash-link';



class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchRest(this.props.match.params.restaurantId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.restaurantId !== this.props.restaurantId) {
            this.componentDidMount();
        }
    }


    render() {
        return (
            <div>

                    <img  className="image-restaurant-show" src={this.props.restaurant.photos_url[0]}/>
            
            <div className="restaurant-show-container">

                    <div className="rest-navigation">
                    <HashLink to={`#description`} className="content-button">Overview</HashLink>
                        <HashLink to={`#reviews`} className="content-button">Reviews</HashLink>
                    </div>    

                    <h1 className="restaurant-name" >{this.props.restaurant.name}</h1>
                    
                    <h2 className="restaurant-description-title" id='description'>Description</h2>
                    <p>{this.props.restaurant.description}</p>

          

                    <h1 className="restaurant-review-title" id='reviews'>Reviews

                        {/* <button onClick={() => restaurantId=this.props.restaurant.id} className="review-button">Write a Review</button> */}

                        <Link className="review-button-container">
                        <button className="review-button" onClick={() => this.props.openModal('write')}>Write a review</button>
                        </Link>
                        
                    </h1>

                 
                        <div className="single-review-container">

                       < ReviewIndexContainer restaurant={this.props.restaurant} />

                        </div>

            

            </div>
        </div>
        )
    }
}

export default RestaurantShow