import React from "react";
import { BsFillPeopleFill, BsFillCalendarFill, BsClock} from 'react-icons/bs'



class EditReservation extends React.Component {
    constructor(props){
        super(props)

        this.state ={date: '' , time: '', size: '', email: '', restaurant_id: '', user_id: '', phone_number: '', special_request: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.state = this.props.reservation       
    }

    componentDidMount(){
        this.props.fetchReservation(this.props.reservationId)
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.reservation !== prevProps.reservation) {
            this.setState({ user_id: this.props.currentUserId, id: this.props.reservationId, date: this.props.reservation.date , time: this.props.reservation.time, size: this.props.reservation.size, email: this.props.reservation.email, restaurant_id: this.props.reservation.restaurant_id, restaurant_name: this.props.reservation.restaurant_name, phone_number: this.props.reservation.phone_number, special_request: this.props.reservation.special_request})
            
        }
    }

    handleSubmit(e) {
        this.props.updateReservation(this.state)
        .then(this.props.history.push(`/${this.props.currentUserId}/profile/reservations`))
        
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        if(!this.props.reservation) return null
        // if(!this.state) return null
        if(!this.props.reservationId) return null;

 
        return (
            <div> 

           
            <div className="big-one">

                <div className="In-the-way"></div>
                <div className="confirmation-container">
                   <h1 className="almost-done">Modify your reservation</h1>
                   <h2 className="almost-done">If you need to change the time or the date please make a new reservation.</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="confirmation-flex">
                            <p className="confirmation-flex-interior"> <BsClock />  {this.state.time}</p>
                            <p  className="confirmation-flex-interior" >  <BsFillPeopleFill /> {this.props.reservation.size}</p>
                            <p  className="confirmation-flex-interior" type='date'> < BsFillCalendarFill />{this.props.reservation.date}</p>
                            {/* <p className="date-confirmation-page"><input className="date-input-reserve" type="date" value={this.props.reservation.date}/></p> */}
                        </div>

                        <div>
                            <input  className="phonenumber-confirm" type="text" defaultValue={this.props.reservation.phone_number} onChange={this.update('phone_number')} />
                            <input type="text" className="phonenumber-confirm" defaultValue={this.props.reservation.email} onChange={this.update('email')} />
                    
                        </div>

                        <div>
                            <textarea className="special-request" cols="72" rows="8" onChange={this.update('special_request')} >{this.props.reservation.special_request}</textarea>
                        </div>
                            <button className="confirm-reservation-button" type="submit">Modify Reservation</button>
                        <div>
                           <p className="by-clicking">By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
                        </div>
                    </form>
                </div>
                <div className="in-the-way-two"></div>
                <div className="dining-info">
                        <h2>What to know before you go</h2>
                        <h3>Important dining information</h3>
                        <p className="p-under-tag">We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
                        <h3>A note from the restaurant</h3>
                        <p className="p-under-tag">Thank you for choosing us. Should your plans change, please let us know. We look forward to seeing you.</p>
                        <h3>Points</h3>
                        <p className="p-under-tag">Keep in mind, you won’t collect points for this reservation unless you choose to below.</p>
                </div>
            </div>
        <footer className="confirm-footer"></footer>
        </div>
        )
    }
}



import { connect } from "react-redux";
import { fetchReservation, updateReservation } from "../../actions/reservation_action";
import ConfirmationReservation from "./confirmation_reservation";


//make it reservation id in the /reservationId/booking
//then access the ownProps to 
const mSTP = (state, ownProps) => {

    return {
        // currentUser: Object.values(state.entities.users)[0].id,
        currentUserId: state.session.id,
        reservationId: ownProps.match.params.reservationId,
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        email: Object.values(state.entities.users)[0].id

    }
}

const mDTP = (dispatch) => {
    return {
        updateReservation: reservation => dispatch(updateReservation(reservation)),
        fetchReservation: reservationId => dispatch(fetchReservation(reservationId))
    }
}



export default connect(mSTP, mDTP)(EditReservation)