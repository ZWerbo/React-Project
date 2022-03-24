import React from "react";

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
    
            
            <div className="restaurant-show-container">
                    <img  className="image-restaurant-show" src={this.props.restaurant.photos_url[0]}/>
                    <h1>{this.props.restaurant.name}</h1>

                      


            </div>
        )
    }
}

export default RestaurantShow