import * as usersApiUtil from "../utils/users_api_util";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const fetchAllUsers = () => dispatch => {
    return usersApiUtil.fetchAllUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const updateUser = user => dispatch => {
    return usersApiUtil.updateUser(user) 
    .then(user => dispatch(receiveUser(user)))
}


export const fetchUser = (user) => dispatch => {
    return usersApiUtil.fetchUser(user)
    .then(user => dispatch(receiveUser(user)))
}