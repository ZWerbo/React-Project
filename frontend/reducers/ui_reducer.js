import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import filtersReducer from "./filtersReducer";
const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer
  });
  
export default uiReducer;