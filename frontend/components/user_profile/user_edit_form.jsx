import React from "react";
import { connect } from "react-redux";


class UserEditForm extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="account-details-container">
                <form className="account-details-form" action="">
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
                        <input type="text" className="edit-email-input" />
                    </label>

                    <label>Username <br />
                        <input type="text" className="edit-email-input" />
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

                    <button className="user-update-button">Save Changes</button>
                </form>


            </div>
        )
    }
}




const mSTP = state => {
    console.log(state.entities.users[state.session.id])
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(UserEditForm)