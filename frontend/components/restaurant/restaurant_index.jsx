import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";




class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAllRests()
    }




    render() {
        return (
            <div className="restaurant_index_outside">
                {
                    this.props.restaurants.map((restaurant) => { return <RestaurantIndexItem restaurant={restaurant} key={restaurant.id}/>  })
                }
            </div>
        )
    }
}

export default RestaurantIndex