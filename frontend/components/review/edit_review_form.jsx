import React from "react";


class EditReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchReview(this.props.reviewId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state)

        .then(  () => this.props.history.push(`/restaurants/${this.state.restaurant_id}`)     )
        
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })   

    }

    render() {
   
        return (
            <div className="edit-form-container">

                <form className="body-text-container" onSubmit={this.handleSubmit}>
                            <button className="x-button-edit-review" onClick={() => this.props.closeModal()}>X</button>
                    <h2 className="edit-review-title">Edit your review</h2>
                <label>Rating 
                    <input className="rating-input-create" type="text" value={this.state.rating} 
                    onChange={this.update("rating")}
                     />
                    </label>
                    <br />
                    <br />
                        <textarea cols="40" rows="10" 
                        value={this.state.body} 
                        onChange={this.update('body')}></textarea>
                    <br />
                    <button className="edit-submit-button" type="submit" >submit</button>

                </form>
            </div>
        )
    }
}

export default EditReview