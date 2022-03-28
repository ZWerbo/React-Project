import * as reviewUtil from "../utils/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const EDIT_REVIEW = 'EDIT_REVIEW'


export const receiveAllReviews = reviews => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}


export const updateReview = (review) => dispatch => {
    return reviewUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}

export const fetchReview = (reviewId) => dispatch => {
    return reviewUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
}

export const fetchAllReviews = () => dispatch => {
    return reviewUtil.fetchAllReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)))
}


export const createReview = review => dispatch => {
    return reviewUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
}


export const deleteReview = reviewId => dispatch => {
    return reviewUtil.deleteReview(reviewId)
    .then(reviewId => dispatch(removeReview(reviewId)))
}