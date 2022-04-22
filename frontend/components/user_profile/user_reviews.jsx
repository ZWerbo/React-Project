import React from "react";
import { connect } from "react-redux";
import UserReviewItem from './user_review_item.jsx'

class UserReviews extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        if(!this.props.reviews) return null;
        if(!this.props.currentUser.reviews) return null;
   
        // console.log(this.props.reviews)
        return (
            <div className="user-review-container">
                    <h1 className="your-reviews-header">Your Reviews</h1>
                {this.props.reviews.map(review =>  {return <UserReviewItem body={review.body} rating={review.rating} restaurant_name={review.restaurant_name} restaurant_id={review.restaurant_id} reviewId={review.id} />})}
            </div>
        )
    }
}


const mSTP = (state) => {
console.log(state)
    return {
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.users[state.session.id].reviews

    }
}


const mDTP = dispatch => {
    return {
        fetchUser: (user) => dispatch(fetchUser(user))
    }
}

export default connect(mSTP, mDTP)(UserReviews)