import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom";

class RestaurantPageReservation extends React.Component {
    constructor(props) {
        super(props)
        this.state ={date: new Date(), time: "4:00", size: 2, email: this.props.currentUserEmail, restaurant_id: this.props.restaurant.id, user_id: 2, restaurant_name: this.props.restaurant.name}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    //I still dod not understand how to pass anything to this new page. Its honestly getting wack. 
    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.createReservation(this.state)
        .then(() => this.props.history.push(`/reservations/${this.props.reservations[this.props.reservations.length - 1].id}`))
    }



    render() {

        if(!this.props.reservations) return null
      
        return (
            <div>
                    <header className="reservation-header-rest-show-page">Make a Reservation</header>
                    <form onSubmit={this.handleSubmit}>

                        <br />
                    <label className="table-for">Table for
                            <select className="party-input" value={this.state.size} onChange={this.update('size')}>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </label>
<br />
                    <div className="Date-time-names">
                       <p className="date-p-tag" >Date</p>
                        <p className="time-p-tag" >Time</p>
                    </div>
                        <input 
                            className="date-input-reserve"
                            type="date" 
                            // className="search-bar-input-date"
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                        <label>
                            <select className="time-input" value={this.state.time} onChange={this.update('time')}>
                            <option value="04:00">4:00pm</option>
                                <option value="04:15">4:15pm</option>
                                <option value="04:30">4:30pm</option>
                                <option value="04:45">4:45pm</option>
                                <option value="05:00">5:00pm</option>
                                <option value="05:15">5:15pm</option>
                                <option value="05:30">5:30pm</option>
                                <option value="05:45">5:45pm</option>
                                <option value="06:00">6:00pm</option>
                                <option value="06:15">6:15pm</option>
                                <option value="06:30">6:30pm</option>
                                <option value="06:45">6:45pm</option>
                                <option value="07:00">7:00pm</option>
                                <option value="07:15">7:15pm</option>
                                <option value="07:30">7:30pm</option>
                                <option value="07:45">7:45pm</option>
                                <option value="08:00">8:00pm</option>
                                <option value="08:15">8:15pm</option>
                                <option value="08:30">8:30pm</option>
                            </select>
                        </label>
                    <div className="submit-reservation-container">
                    <button className="submit-reservation" 
                    type="submit">Find a Table</button>
         
                    </div>
                  

                    </form>

            </div>
        )
    }
}

export default withRouter(RestaurantPageReservation)