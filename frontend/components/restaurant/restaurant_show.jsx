import React from "react";
import ReviewIndexContainer from "../review/review_index_container";
import { Link } from "react-router-dom";
import CreateReview from "../review/review_form"
import { HashLink } from 'react-router-hash-link';
import { AiFillStar } from 'react-icons/ai'
import RestaurantPageReservationContainer from "../reservations/restaurant_page_reservation_container";
import {BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'



class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        this.favorite = {user_id: this.props.currentUserId, restaurant_id: this.props.restaurantId }
    }

    componentDidMount() {
        this.props.fetchRest(this.props.match.params.restaurantId)
        this.props.fetchFavorites({["userId"]: this.props.currentUserId})

    };

    componentDidUpdate(prevProps) {
        if (prevProps.restaurantId !== this.props.restaurantId) {
            this.componentDidMount();
        }
    }


    render() {
        if(!this.props.restaurant) return null;
        // if(!this.props.favorites) return null;
        if(!this.props.restaurant.photos_url[1]) return null;
      

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

        var write;
        var signInPlease;
        if(this.props.currentUserId !== null) {
            write =   <Link className="review-button-container" to={`/restaurants/${this.props.restaurant.name}/${this.props.restaurant.id}/review`} > 
                        <button className="review-button" 
                        >Write a review</button>
                        </Link>
        } else {
            signInPlease =   <Link className="review-button-container"> 
            <button className="review-button" 
            >Sign in to leave a review</button>
            </Link>
        }


        let savebutton;
        let deletebutton;
        let logintoSaveButton;
        
        let favoritesrestaurantIds = []; 
        for(let i = 0; i < this.props.favorites.length; i++) {
            favoritesrestaurantIds.push(this.props.favorites[i].restaurant_id)
        }
        
        
        if(this.props.currentUserId === null) {
            logintoSaveButton =  <button className="favorite-restaurant-button"> <BsBookmark className="bookmark" /> Login to save</button>
        } else {
            if(!favoritesrestaurantIds.includes(parseInt(this.props.restaurantId))) {
                savebutton = <button className="favorite-restaurant-button" onClick={() => this.props.createFavorite(this.favorite)}> <BsBookmark /> Save this restaurant</button>
            } else {
                deletebutton =  <button className="favorite-restaurant-button"> <BsFillBookmarkFill className="bookmark" color="crimson" /> Restauarant saved!</button>
            }

        }
        

    //    console.log(this.favorite)

       

     
        return (
            <div>


                <div className="image-and-button">
                            {savebutton}
                            {logintoSaveButton}
                            {deletebutton}
                       {/* <button className="favorite-restaurant-button" onClick={() => this.props.createFavorite(this.favorite)}> <BsBookmark /> Save this restaurant</button> */}
                    <img  className="image-restaurant-show" src={this.props.restaurant.photos_url[1]}/>

                </div>


                <div className="restaurant-reservation-container">

               
                            <div className="restaurant-show-container">

                                    <div className="rest-navigation">
                                    <HashLink to={`#description`} className="content-button">Overview</HashLink>
                                        <HashLink to={`#menu`} className="content-button">Menu</HashLink>
                                        <HashLink to={`#reviews`} className="content-button">Reviews</HashLink>
                                    </div>    


                                    <h1 className="restaurant-name" >{this.props.restaurant.name}  




                                    </h1>

                                    <div className="star-other-container">
                                        <div>
                                    {mapStar.map(star => {
                                        return <AiFillStar color="red" className="star-show-page" />})}

                                        </div>
                                    <p className="restaurant-show-description-items">      &nbsp;&nbsp; {count} Reviews    &nbsp;&nbsp;  {this.props.restaurant.cuisine}    &nbsp;&nbsp; {this.props.restaurant.hours} &nbsp;&nbsp; Tuesday-Sunday</p>
                                    </div>
                                    {/* <h2 className="restaurant-description-title" id='description'>Description</h2> */}
                                    <p id='description' className="restaurant-description">{this.props.restaurant.description}</p>
                                    
                                    <h2 id="menu" className="restaurant-menu-title">Menu</h2>
                                    <img  src={this.props.restaurant.photos_url[2]}/> 
                                    
                                    <h1 className="restaurant-review-title" id='reviews'>Reviews
                                            {write}
                                            {signInPlease}
                                        {/* <button onClick={() => restaurantId=this.props.restaurant.id} className="review-button">Write a Review</button> */}
                                    
                                    

                                    </h1>
                                    
                                        <div className="single-review-container">
                                    
                                       < ReviewIndexContainer restaurant={this.props.restaurant} />
                                    
                                        </div>
                                    
                            </div>

                            <div className="reservation-space"></div>

                    <div className="reservation-showpage-container">
                        < RestaurantPageReservationContainer restaurant={this.props.restaurant}  />
                    </div>

                    </div>


        </div>
        )
    }
}

export default RestaurantShow