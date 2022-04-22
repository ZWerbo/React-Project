import React from "react"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillPeopleFill, BsFillCalendarFill, BsClock} from 'react-icons/bs'

class ReservationProfileItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        // console.log( new Date(this.props.reservation.date))
        // console.log(new Date())

        // const current = new Date(this.props.reservation.date.setDate(this.props.reservation.date.getDate() + 1))
        // console.log(current)
        var info;
        if(new Date(this.props.reservation.date) < new Date()) {
            info = (    
                <div className="reservation-info-profile" >
            <p className="reservation-profile-info"> <BsClock />  {this.props.reservation.time}</p>
            <p  className="reservation-profile-info" >  <BsFillPeopleFill /> {this.props.reservation.size}</p>
            <p  className="reservation-profile-info" type='date'> < BsFillCalendarFill />{this.props.reservation.date}</p>

            </div>)
        }
        return (

            <div>
                
                {/* {info} */}
            <h3>Restaurant Name</h3>
            <div className="reservation-info-profile" >
            <p className="reservation-profile-info"> <BsClock />  {this.props.reservation.time}</p>
            <p  className="reservation-profile-info" >  <BsFillPeopleFill /> {this.props.reservation.size}</p>
            <p  className="reservation-profile-info" type='date'> < BsFillCalendarFill />{this.props.reservation.date}</p>

            </div>

            </div>
            )
    }

}

export default ReservationProfileItem