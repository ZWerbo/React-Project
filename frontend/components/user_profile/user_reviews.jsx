import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { deleteReview } from "../../actions/review_action.js";
import UserReviewItem from './user_review_item.jsx'
import {fetchAllUsers, fetchUser, updateUser}from "../../actions/user_action.js"



const UserReviews = (props) => {

    const loadingChanges = useRef(true)
    

    useEffect(() => {
        // props.fetchUser(props.currentUser)
        if(loadingChanges.current) {
            props.updateUser(props.currentUser)
            loadingChanges.current = false
        } 
    },[props.reviews])


        if(!props.reviews) return null;
        if(!props.currentUser.reviews) return null;
   
        // console.log(this.props.reviews)
        return (
            <div className="user-review-container">
                    <div className="your-reviews-header">Your Reviews</div>
                {props.reviews.map(review =>  {return <UserReviewItem loadingChanges={loadingChanges} body={review.body} rating={review.rating} deleteReview={props.deleteReview} restaurant_name={review.restaurant_name} restaurant_id={review.restaurant_id} reviewId={review.id} />})}
            </div>
        )

}


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.users[state.session.id].reviews

    }
}


const mDTP = dispatch => {
    return {
        fetchUser: (user) => dispatch(fetchUser(user)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(UserReviews)