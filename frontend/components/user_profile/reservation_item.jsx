import React from "react"; 
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ReservationProfileItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (

            <div>
                <Link to={`/reservations/${this.props.reservation.id}`}>Here it is</Link>
        </div>
            )
    }

}

export default ReservationProfileItem