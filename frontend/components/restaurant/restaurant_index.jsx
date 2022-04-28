import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaAngellist} from 'react-icons/fa'


class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeout: false
        }
    }
    componentDidMount() {
        this.props.fetchAllRests()
        this.props.fetchAllReviews()
    }




    restaurantMatch(restaurant) {

        if(restaurant.name.toLowerCase().includes(this.props.searchInput.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(this.props.searchInput.toLowerCase())) {
            return <RestaurantIndexItem searchInput={this.props.searchInput} restaurant={restaurant} reviews={this.props.reviews} key={restaurant.id}/>

        }
    }


    render() {
        console.log(this.props.restaurants)
        return (
            <div>

            <div className="restaurant_index_outside">
                {
                    this.props.restaurants.map((restaurant) => { 
                        return this.restaurantMatch(restaurant)
                        // return <RestaurantIndexItem restaurant={restaurant} reviews={this.props.reviews} key={restaurant.id}/> 
                 })
                }
            </div>
            <footer className="restaurant-index-footer">
                <div className="zachs-links">
                    <div className="my-name">Zach Werbalowsky</div>
                <button className="zach-link-buttons" onClick={() => window.open("https://github.com/ZWerbo")}>< AiFillGithub /></button>
                <button className="zach-link-buttons" onClick={() => window.open("https://www.linkedin.com/in/zach-werbalowsky-00a466237/")}> <AiFillLinkedin /></button>
                <button className="zach-link-buttons"> <FaAngellist /></button>
                </div>
                <div className="important-info">
                    -- This is a clone of Opentable --
                    <br />
                    <br />
                <div>Technologies used: React/Redux, React Hooks, Ruby on Rails, Javascript, PostgreSQL, CSS/HTML, Amazon S3  </div>

                </div>
            </footer>
                </div>
        )
    }
}

export default RestaurantIndex