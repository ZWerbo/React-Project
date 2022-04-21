import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearSessionError } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modal";

const mapSTP = (state) => {
    return {
        errors: state.errors.session,
        // errors: errors.session,
        formType: 'login',
        demo: {
            username: 'zachwerb',
            password: 'password123'
        },
        navLink: <Link to="/signup">Sign up instead</Link>
    }
}

const mapDTP = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        action: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearSessionError()),
        openModal: modal => dispatch(openModal(modal))
    }
}


export default connect(mapSTP, mapDTP)(LoginForm)






