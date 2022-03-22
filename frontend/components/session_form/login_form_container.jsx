import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up instead</Link>
    }
}

const mapDTP = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        action: () => dispatch(logout())
    }
}


export default connect(mapSTP, mapDTP)(LoginForm)






