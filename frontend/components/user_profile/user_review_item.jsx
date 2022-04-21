import React from "react"
import { AiFillStar } from 'react-icons/ai'
import { Link } from "react-router-dom"

const UserReviewItem = ({body, rating, restaurant_id, restaurant_name, reviewId}) => {
    console.log(restaurant_name)
    return (
        <div className="single-user-review">
            <h2>
            {restaurant_name}
            </h2>
            {[...Array(rating)].map(star => {
                    return <AiFillStar color="red" />
                } ) }
            <br />
            {body} 
            <br />

            <Link to={`/restaurants/${restaurant_id}/review/${reviewId}`}>Edit</Link>
        </div>
    )
}

export default UserReviewItem