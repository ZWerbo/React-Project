import React from "react";



class CreateReview extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {rating: '', body: '', author_id: this.props.currentUserId, restaurant_id: this.props.restaurantId, restaurant_name: this.props.restaurantName}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
        .then(() => this.props.history.push(`/restaurants/${this.props.restaurantId}`))
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        console.log(this.props.restaurantName)
        return (
            <div className="review-form-container">

                <form className="body-text-container" onSubmit={this.handleSubmit}>
                            <button className="x-button-create-review" onClick={() => this.props.closeModal()}>X</button>
                    <h2 className="create-review-title">Leave a Review</h2>
                <label>Rating
                    {/* <input className="rating-input-create" type="text"  value={this.state.rating} onChange={this.update("rating")} /> */}
                    <select 
                    value={this.state.rating}
                     onChange={this.update("rating")} placeholder="0" required>
                            <option default='true'>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <br />
                    <br />
                        <textarea cols="40" rows="10" 
                        value={this.state.body}
                         onChange={this.update('body')} placeholder="Please write a review before submitting" required>
                    
                         </textarea>
                    <br />
                    <button className="create-submit-button" type="submit" >Submit</button>

                </form>
            </div>
        )

    }
}

export default CreateReview