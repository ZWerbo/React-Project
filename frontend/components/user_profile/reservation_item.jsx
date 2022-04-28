import React from "react"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillPeopleFill, BsFillCalendarFill, BsClock} from 'react-icons/bs'

// class ReservationProfileItem extends React.Component {
//     constructor(props) {
//         super(props)
//     }

const ReservationProfileItem = ({reservation, deleteReservation, loadingChanges}) => {


        
        return (

            <div className="single-reservation-profile">
                
                {/* {info} */}
            <div className="reservation-restaurant-name-profile">{reservation.restaurant_name}</div>
                <div className="reservation-info-profile" >
                <p className="reservation-profile-info"> <BsClock />  {reservation.time}</p>
                <p  className="reservation-profile-info" >  <BsFillPeopleFill /> {reservation.size}</p>
                <p  className="reservation-profile-info" type='date'> < BsFillCalendarFill />{reservation.date}</p>
                </div>

                <div className="reservation-modify-delete">
                    <Link to={`/reservations/${reservation.id}/edit`}>
                <button className="reservation-profile-button">Modify</button> 
                    </Link>
                    |
                <button className="reservation-profile-button" onClick={() => deleteReservation(reservation.id).then(() => loadingChanges.current = true)}>Delete</button>
                </div>
            </div>
            )
    }


export default ReservationProfileItem