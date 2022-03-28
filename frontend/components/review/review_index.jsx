import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllReviews()
        // this.props.fetchAllUsers()
    }



    render() {
        // if(!this.props.restaurant.review) return null;
        return (
        
            <div>
                
        
                {
                    
                    this.props.reviews.map((review) => {
                        if(review.restaurant_id === this.props.restaurant.id) {

                            return <ReviewIndexItem review={review} users={this.props.users} key={review.id} 
                            fetchAllReviews={this.props.fetchAllReviews} 
                            deleteReview={this.props.deleteReview}
                            currentUserId={this.props.currentUserId}
                            fetchAllUsers={this.props.fetchAllUsers}
                            openModal={this.props.openModal}/>
                        
                    }
                })
                }
            </div>
        )
    }
}

export default ReviewIndex