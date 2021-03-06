export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'
import * as SessionApiUtil from "../utils/session_api_util"

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearSessionError = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
        err => (dispatch(receiveErrors(err.responseJSON))))
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
    err => (dispatch(receiveErrors(err.responseJSON))))
}


export const logout = () => dispatch => {
    return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
}