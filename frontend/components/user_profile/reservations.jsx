import React from "react";
import { connect } from "react-redux";


class ReservationProfile extends React.Component {
    constructor(props) {
        debugger
        super(props)
    }


    render() {
        return (
            <div >


        <p>djalksdjflkasjdf;lajsd;lfkjasl;dkfjasdf</p>
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

export default connect(mSTP, mDTP)(ReservationProfile)