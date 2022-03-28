// export const fetchAllReviews = (restaurantId) => {
//     return $.ajax({
//         url: `/api/restaurant/${restaurantId}/reviews`
//     })
// }

export const fetchAllReviews = () => {
    return $.ajax({
        url: `/api/reviews`
    })
}

export const fetchReview = reviewId => {
    return $.ajax({
        url:`api/reviews/${reviewId}`
    })
}

export const createReview = review => {
    return $.ajax({
        method:'Post',
        url: `api/reviews`,
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        method: "PATCH",
        url: `api/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
}