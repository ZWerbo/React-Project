import React from "react";
import { openModal } from "../../actions/modal";


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
           deleteButton = <div className="delete-button-container"><button className="delete-button" onClick={() => this.props.deleteReview(this.props.review.id)}>delete</button> </div>
           editButton =   <div className="delete-button-container"> <button className="edit-button" onClick={() => this.props.openModal('edit')}>Edit</button> </div>
        }
         return (

            <div className="single-review-container">
                <div className="first-review-box">
        {
            this.props.users.map(user => {
                if(user.id === this.props.review.author_id) {return user.username}
            })
        }
                </div>
                <div className="second-review-box">
                    {this.props.review.rating}
                            <br />
                            <br />
                    {this.props.review.body}
                </div>
                
            <br />

                <div className="third-review-box">
                {editButton} {deleteButton} 

                </div>


            </div>
        )
    }
}

export default ReviewIndexItem