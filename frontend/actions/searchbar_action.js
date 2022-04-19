import { fetchAllRests } from "./restaurant_action";

export const  UPDATE_FILT = 'UPDATE_FILT'

export const updateFilt = (filter, value) => {
    return {
        type: UPDATE_FILT,
        filter,
        value
    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(updateFilt(filter, value));
    return fetchAllRests(getState().ui.filters)(dispatch)
}