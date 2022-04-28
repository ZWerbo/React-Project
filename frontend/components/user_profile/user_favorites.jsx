import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { deleteFavorite, fetchFavorites } from "../../actions/favorite_action"
import React from "react"
import UserFavoriteItem from "./user_favorite_item"

const UserFavorites = ({fetchFavorites, currentUserId, favorites, deleteFavorite}) => {
    
    const loadingChanges = useRef(true)


    useEffect(() => {
        if(loadingChanges.current) {
            // debugger
            fetchFavorites({["userId"]: currentUserId})
            loadingChanges.current = false
        } 
    },[favorites])


    return (
        <div className="user-favorite-container">
                <div className="saved-restaurants">Saved Restauraunts</div>
                {favorites.map(favorite => {
                    return < UserFavoriteItem loadingChanges={loadingChanges} favorite={favorite} deleteFavorite={deleteFavorite} />
                })}
        </div>
    )

}


const mSTP = (state) => {
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