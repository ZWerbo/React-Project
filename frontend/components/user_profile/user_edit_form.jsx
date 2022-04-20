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
                    <label> Lastname
                    <input type="text" className="edit-name-input" />
                    </label>

                    </div>



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