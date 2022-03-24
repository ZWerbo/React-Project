import {RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT} from "../actions/restaurant_action"

const restaurantReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant
            return newState
        default:
            return state
    }
}

export default restaurantReducer