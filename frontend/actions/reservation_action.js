import * as reservationUtil from "../utils/reservation_api_util";

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'


export const receiveAllReservations = (reservations) => {
    return {
        type: RECEIVE_ALL_RESERVATIONS,
        reservations
    }
}

export const receiveReservation = (reservation) => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

export const removeReservation = (reservationId) => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
}

export const fetchAllReservations = () => dispatch => {
    return reservationUtil.fetchAllReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
}

export const fetchReservation = reservationId => dispatch => {
    return reservationUtil.fetchReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const createReservation = reservation => dispatch => {
    return reservationUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const updateReservation = reservation => dispatch => {
    return reservationUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
}

export const deleteReservation = reservationId => dispatch => {
    return reservationUtil.deleteReservation(reservationId)
    .then(reservationId => dispatch(removeReservation(reservationId)))
}