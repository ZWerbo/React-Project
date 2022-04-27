import { connect } from "react-redux";
import { fetchRest } from "../../actions/restaurant_action";
import RestaurantShow from "./restaurant_show";
import { openModal } from "../../actions/modal"
import { createFavorite, deleteFavorite } from "../../actions/favorite_action";
import { fetchFavorites } from "../../actions/favorite_action"


const mSTP = (state, ownProps) => {
    console.log(Object.values(state.entities.favorites))
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUserId: state.session.id,
        reviews: Object.values(state.entities.reviews),
        favorites: Object.values(state.entities.favorites),
        restaurantId: ownProps.match.params.restaurantId

    }
}

const mDTP = dispatch => {
    return {
        fetchRest: restaurantId => dispatch(fetchRest(restaurantId)),
        openModal: (modal) => dispatch(openModal(modal)),
        createFavorite: (favorite) => dispatch(createFavorite(favorite)),
        fetchFavorites: userId => dispatch(fetchFavorites(userId)),
        deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))

        

    }
}

export default connect(mSTP,mDTP)(RestaurantShow)