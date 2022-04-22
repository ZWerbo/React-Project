import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";


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
        // debugger
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
            <footer className="restaurant-index-footer"></footer>
                </div>
        )
    }
}

export default RestaurantIndex