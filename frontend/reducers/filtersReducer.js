import { UPDATE_FILT } from "../actions/searchbar_aciton";

const DEFAULT = {
    general: null,
     search: null
}

const filtersReducer = (state=DEFAULT, action) => {
    Object.freeze(state)
    switch (action.type) {
        case UPDATE_FILT:
            const newState =  Object.assign({}, {[action.filter]:action.value}); 
            return newState
    
        default:
            return state
    }
}

export default filtersReducer