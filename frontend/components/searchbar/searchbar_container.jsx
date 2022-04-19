import { connect } from "react-redux";
import SearchBar from "./searchbar";

const mSTP = state => {
    // debugger
    // console.log(state.entities.search)
    return {
        currentUser: state.session.id,
        searchResult: state.entities.search,
        // capTerms: Object.values(state.entities.search)
    }
}

const mDTP = dispatch => {
    return {
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        fetchRest: (restaurantId) => dispatch(fetchRest(restaurantId)),
        fetchRests: () => dispatch(fetchRests())

    }
}

export default connect(mSTP, mDTP)(SearchBar)