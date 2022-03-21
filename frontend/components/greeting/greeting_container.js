import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting"

const mapSTP = ({ session, entities: { users } }) => {
    return {
        currentUsers: users[session.id]
    }
}

const mapDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapSTP, mapDTP)(Greeting)