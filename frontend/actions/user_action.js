import * as usersApiUtil from "../utils/users_api_util";

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchAllUsers = () => dispatch => {
    return usersApiUtil.fetchAllUsers()
    .then(users => dispatch(receiveUsers(users)))
}