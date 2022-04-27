import React from "react"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillPeopleFill, BsFillCalendarFill, BsClock} from 'react-icons/bs'

class ReservationProfileItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (

            <div className="single-reservation-profile">
                
                {/* {info} */}
            <h2>{this.props.reservation.restaurant_name}</h2>
                <div className="reservation-info-profile" >
                <p className="reservation-profile-info"> <BsClock />  {this.props.reservation.time}</p>
                <p  className="reservation-profile-info" >  <BsFillPeopleFill /> {this.props.reservation.size}</p>
                <p  className="reservation-profile-info" type='date'> < BsFillCalendarFill />{this.props.reservation.date}</p>
                </div>

                <div className="reservation-modify-delete">
                    <Link to={`/reservations/${this.props.reservation.id}/edit`}>
                <button className="reservation-profile-button">Modify</button> 
                    </Link>
                    |
                <button className="reservation-profile-button" onClick={() => this.props.deleteReservation(this.props.reservation.id).then(window.location.reload())}>Delete</button>
                </div>
            </div>
            )
    }

}

export default ReservationProfileItem