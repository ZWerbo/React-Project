import * as favUtil from "../utils/favorite_api_util"

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES'
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
})

export const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

export const fetchFavorites = (userId) => dispatch => (
    favUtil.fetchFavorites(userId).then(favorites => dispatch(receiveFavorites(favorites)))
)

export const createFavorite = favorite => dispatch => {
    return favUtil.createFavorite(favorite)
    .then(favorite => dispatch(receiveFavorite(favorite)))
}

export const deleteFavorite = favoriteId => dispatch => {
    return favUtil.deleteFavorite(favoriteId) 
    .then(favoriteId => dispatch(removeFavorite(favoriteId)) )
}