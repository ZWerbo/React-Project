import React from "react"
import { AiFillStar } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { BsFillTrashFill } from 'react-icons/bs'
import {AiOutlineEdit } from 'react-icons/ai'

const UserReviewItem = ({body, rating, restaurant_id, restaurant_name, reviewId, deleteReview}) => {
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
            <br />

            <div className="profile-review-edit-delete">
            <Link to={`/restaurants/${restaurant_id}/review/${reviewId}`}>
            <button className="edit-review-profile"><AiOutlineEdit /></button>
            </Link>
            &nbsp;&nbsp;
                <button className="edit-review-profile" onClick={() => deleteReview(reviewId).then(window.location.reload())}>< BsFillTrashFill /></button>


            </div>

        </div>
    )
}

export default UserReviewItem