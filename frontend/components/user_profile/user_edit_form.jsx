import React from "react";
import { connect } from "react-redux";
import { receiveUser, updateUser } from "../../actions/user_action";



class UserEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.receiveUser(this.props.currentUser);      
    }
 

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateUser(this.state).then(() => window.location.reload())
        // .then(  () => this.props.history.push(`/restaurants/${this.state.restaurant_id}`)     
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div className="account-details-container">
                <form onSubmit={this.handleSubmit} className="account-details-form" action="">
                    <h1>About Me</h1>

                    <div className="first-last-row">
                    <label> Firstname
                    <input className="edit-name-input" type="text" />
                    </label>
                    <label> &nbsp;&nbsp;&nbsp; Lastname
                    <input type="text" className="edit-name-input2" />
                    </label>
                    </div>

                    <div className="edit-column">
                    <label>Email <br />
                        <input type="text" className="edit-email-input" value={this.state.email} onChange={this.update('email')} />
                    </label>

                    <label>Username <br />
                        <input type="text" className="edit-email-input" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>Phonenumber<br />
                        <input type="text" className="edit-email-input" />
                    </label>

                    </div>

                    <h2>Change Password</h2>
                    <div className="edit-column" >
                    <label> Password <br />
                    <input type="text" className="edit-email-input" />
                    </label>
                    </div>

                    <button type="submit" className="user-update-button">Save Changes</button>
                </form>


            </div>
        )
    }
}




const mSTP = state => {
    // console.log(state.entities.users[state.session.id])
    return {
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        receiveUser: user => dispatch(receiveUser(user))
    }
}

export default connect(mSTP, mDTP)(UserEditForm)