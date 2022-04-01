import React from "react";
import { openModal } from "../../actions/modal";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'
import { AiFillStar } from 'react-icons/ai'
class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }

    // if I can ever get these users on the page I can map them with it this will give us the edit buttons.
    //i just don't understand how to pass these users into the reviews. This is come in handy later when 
    //i'm fetchingReviews into the user show to give them their reviews. 

    render() {
        // var deleteButton = if (currentUserId === this.props.review.author_id)
      
        var deleteButton;
        var editButton;
        if (this.props.currentUserId === this.props.review.author_id) {
           deleteButton = <div className="delete-button-container"><button className="delete-button" onClick={() => this.props.deleteReview(this.props.review.id).then(window.location.reload())}>delete</button> </div>
           editButton =   <div className="delete-button-container"> <Link to={`/restaurants/${this.props.review.restaurant_id}/review/${this.props.review.id}`}>  <button className="edit-button">Edit</button>   </Link> </div> 
        }

    

         return (

            <div className="single-review-container">
                    <div className="cgProfileReview-container"><CgProfile className="cgProfileReview" /></div>
            
                <div className="first-review-box">
        {
            this.props.users.map(user => {
                if(user.id === this.props.review.author_id) {return user.username}
            })
        }
                </div>

                <div className="second-review-box">
                {[...Array(this.props.review.rating)].map(star => {
                    return <AiFillStar color="red" />
                } ) }
                    
                            <br />
                            <br />
                    {this.props.review.body}
                </div>
                
            <br />

                <div className="third-review-box">
           
                {editButton} 
            
                
                {deleteButton} 

                </div>


            </div>
        )
    }
}

export default withRouter(ReviewIndexItem)