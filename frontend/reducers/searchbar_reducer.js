import { RECEIVE_ALL_RESTAURANTS } from "../actions/restaurant_action";

const searchbarReducer = (state=[], action) => {
    Object.freeze(oldState);
    const newState = state.slice();
    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            const rests = Object.values(action.rests);
            rests.forEach(rest => nextState.push(rest.name, rest.cuisine, rest.id))
            return newState
    
        default:
          return state;
    }
}

export default searchbarReducer;