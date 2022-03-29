export const fetchAllRests = () => {
    return $.ajax({
        url: 'api/restaurants'
    })
}

export const fetchRest = restaurantId => {
    return $.ajax({
        url: `api/restaurants/${restaurantId}`
    })
}