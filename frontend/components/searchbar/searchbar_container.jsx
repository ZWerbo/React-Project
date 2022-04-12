import { connect } from "react-redux";
import SearchBar from "./searchbar";

const mSTP = state => {
    return {
        currentUser: state.session.id,
        searchTerm: Object.values(state.entities.restaurants).flatMap(el => [el.cuisine.toLowerCase(), el.name.toLowerCase()])
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(SearchBar)