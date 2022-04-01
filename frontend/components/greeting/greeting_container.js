import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting"
import { openModal } from "../../actions/modal"

const mapSTP = (state) => {
    return {
        currentUser: state.session.id, 
        currentUsername: state.session.username
        // currentUsers: session[id]
    }
}

const mapDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapSTP, mapDTP)(Greeting)