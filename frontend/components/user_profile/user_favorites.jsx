import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { deleteFavorite, fetchFavorites } from "../../actions/favorite_action"
import React from "react"
import UserFavoriteItem from "./user_favorite_item"

const UserFavorites = ({fetchFavorites, currentUserId, favorites, deleteFavorite}) => {
    
    useEffect(() => {
        fetchFavorites({["userId"]: currentUserId})
    },[])

    return (
        <div className="user-favorite-container">
                <div>Saved Restauraunts</div>
                {favorites.map(favorite => {
                    return < UserFavoriteItem favorite={favorite} deleteFavorite={deleteFavorite} />
                })}
        </div>
    )

}


const mSTP = (state) => {
    console.log(state)
    return {
        currentUserId: state.session.id,
        favorites: Object.values(state.entities.favorites)
    }
}

const mDTP = dispatch => {
    return {
        fetchFavorites: userId => dispatch(fetchFavorites(userId)),
        deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))

    }
}

export default connect(mSTP, mDTP)(UserFavorites)