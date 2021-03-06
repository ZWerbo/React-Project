import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearSessionError } from "../../actions/session_actions";
import SessionForm from "./signup_form";
import { closeModal, openModal } from "../../actions/modal";



const mapSTP = state => {
    return {
        // errors: errors.session,
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to='/login'>log in!</Link>
    }
}

const mapDTP = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
              Login
            </button>),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearSessionError()),
        openModal: modal => dispatch(openModal(modal))

    }
}

export default connect(mapSTP, mapDTP)(SessionForm)
