import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal";

const modalReducer = (oldstate= null, action) => {
    Object.freeze(oldstate)
    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
        return oldstate
    }
}

export default modalReducer