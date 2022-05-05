import React from "react"
import {BsFillBookmarkFill } from 'react-icons/bs'

const UserFavoriteItem = ({favorite, deleteFavorite, loadingChanges}) => {
    
    return (
        <div className="single-user-favorite">
                <img  className="image-favorite" src={favorite.restaurant?.photos_url[0]}/>
            <div className="favorite-restaurant-info">{favorite.restaurant?.name}
            <button className="unsave-button" onClick={() => deleteFavorite(favorite.id).then(() => loadingChanges.current = true)}>
                <div className='remove-from-saved'>
                <BsFillBookmarkFill className="bookmark" color="crimson" /> Remove from saved restaurants
                    
                </div>
            </button>
                <div>
                {favorite.restaurant?.cuisine}

                </div>
                <div>{favorite.restaurant?.neighborhood}, Portland</div>
            </div>
            
        </div>
    )
}



export default UserFavoriteItem 