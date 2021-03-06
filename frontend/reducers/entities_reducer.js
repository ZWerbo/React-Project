import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import restaurantReducer from "./restaurant_reducer";
import reviewReducer from "./review_reducer";
import reservationReducer from "./reservation_reducer";
import searchbarReducer from "./searchbar_reducer";
import favoriteReducer from "./favorites_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantReducer,
  reviews: reviewReducer,
  reservations: reservationReducer,
  search: searchbarReducer,
  favorites: favoriteReducer
});

export default entitiesReducer;