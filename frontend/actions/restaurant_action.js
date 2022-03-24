import * as RestaurantApiUtil from "../utils/restaurant_api_util";

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS'
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT'

const receiveAllRestaurants = restaurants => {
    return {
        type: RECEIVE_ALL_RESTAURANTS,
        restaurants
    }
}

const receiveRestaurant = restaurant => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant
    }
}

export const fetchAllRests = () => dispatch => {
    return RestaurantApiUtil.fetchAllRests()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
}

export const fetchRest = restaurantId => disptach => {
    return RestaurantApiUtil.fetchRest(restaurantId)
    .then(restaurant => disptach(receiveRestaurant(restaurant)))
}
