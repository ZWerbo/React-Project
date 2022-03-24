import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
         

            <Link className='link1' to={`/restaurants/${this.props.restaurant.id}`}>
            <div className="restaurant-index-inside">

                <img className="image-index" src={this.props.restaurant.photos_url[0]}/>
                <h1 className="restaurant-index-header">{this.props.restaurant.name}</h1> 
                <h3>{this.props.restaurant.cuisine}</h3> 
            </div>
            </Link>
        )
    }
}

export default RestaurantIndexItem