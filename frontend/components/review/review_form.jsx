import React from "react";



class CreateReview extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {rating: '', body: '', author_id: this.props.currentUserId, restaurant_id: 1}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state)
        .then(this.props.closeModal)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
    
        return (
            <div className="review-form-container">

                <form className="body-text-container" onSubmit={this.handleSubmit}>
                            <button className="x-button-create-review" onClick={() => this.props.closeModal()}>X</button>
                    <h2 className="create-review-title">Leave a Review</h2>
                <label>Rating
                    <input className="rating-input-create" type="text"  value={this.state.rating} onChange={this.update("rating")} />
                    </label>
                    <br />
                    <br />
                        <textarea cols="40" rows="10" value={this.state.body} onChange={this.update('body')}></textarea>
                    <br />
                    <button className="create-submit-button" type="submit" >submit</button>

                </form>
            </div>
        )

    }
}

export default CreateReview