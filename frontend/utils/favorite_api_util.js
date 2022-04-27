export const fetchFavorites = data => (
    $.ajax({
        method: 'GET',
        url: 'api/favorites',
        data
    })
)

export const createFavorite = favorite => (
    $.ajax({
        method: 'POST',
        url: 'api/favorites',
        data: { favorite }
    })
)

export const deleteFavorite = favId => (
    $.ajax({
        method: 'DELETE',
        url: `api/favorites/${favId}`
    })
)

