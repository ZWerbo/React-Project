import { RECEIVE_ALL_RESTAURANTS } from "../actions/restaurant_action";

const searchbarReducer = (state=[], action) => {
    Object.freeze(state);
    const newState = state.slice();
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            const rests = Object.values(action.restaurants);
            rests.forEach(rest => newState.push({name: rest.name, cuisine: rest.cuisine, id: rest.id}))
            return newState
    
        default:
          return state;
    }
}

export default searchbarReducer;