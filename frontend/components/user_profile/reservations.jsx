import React from "react";
import { connect } from "react-redux";


class ReservationProfile extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div  className="reservation-container">
                <h1>Your reservations</h1>

            </div>
        )
    }
}




const mSTP = state => {
    console.log(state)
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(ReservationProfile)