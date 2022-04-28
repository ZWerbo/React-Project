import React from "react";
import { connect } from "react-redux";
import { fetchAllRests } from "../../actions/restaurant_action";
import { fetchAllReviews } from "../../actions/review_action";
import SearchPageRestaurantItem from "./search_page_restaurant_items";
import { FaMoneyBill } from 'react-icons/fa'
import {GrLocation} from 'react-icons/gr'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaAngellist} from 'react-icons/fa'


class SearchPageRestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeout: false
        }
    }
    componentDidMount() {
        this.props.fetchAllRests()
        this.props.fetchAllReviews()
    }




    restaurantMatch(restaurant) {
        if(restaurant.name.toLowerCase().includes(this.props.searchInput.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(this.props.searchInput.toLowerCase())) {
            return <SearchPageRestaurantItem searchInput={this.props.searchInput} restaurant={restaurant} reviews={this.props.reviews} key={restaurant.id}/>

        }
    }


    render() {
        return (
    <div>

            <div className="whole-search-page">
                <div className="left-side-searchpage">
                        <br /><br />
                    
                            <div>
                                <div className="price-left"> <FaMoneyBill/> Price</div>
                                <button className="money-button" >$</button> <button className="money-button" >$$</button> <button className="money-button" >$$$</button>
                            </div>
                                <br /><br />
                            <div className="neigborhood-search">
                                <div> <GrLocation/> Neighborhood</div>
                                <br />
                                <div className="neighborhood" ><input type="checkbox" />Southeast</div>
                                <div className="neighborhood"><input type="checkbox" />Southwest</div>
                                <div className="neighborhood"><input type="checkbox" />Northeast</div>
                                <div className="neighborhood"><input type="checkbox" />Nouthwest</div>
                                <div className="neighborhood"><input type="checkbox" />Pearl District</div>

                            </div>
                </div>

            <div className="search_page_restaurant_index_outside">
                {
                    this.props.restaurants.map((restaurant) => { 
                        return this.restaurantMatch(restaurant)
                        // return <RestaurantIndexItem restaurant={restaurant} reviews={this.props.reviews} key={restaurant.id}/> 
                 })
                }
            </div>
                </div>
                <footer className="restaurant-index-footer">
                <div className="zachs-links">
                    <div className="my-name">Zach Werbalowsky</div>
                <button className="zach-link-buttons" onClick={() => window.open("https://github.com/ZWerbo")}>< AiFillGithub /></button>
                <button className="zach-link-buttons" onClick={() => window.open("https://www.linkedin.com/in/zach-werbalowsky-00a466237/")}> <AiFillLinkedin /></button>
                <button className="zach-link-buttons"> <FaAngellist /></button>
                </div>
                <div className="important-info">
                    -- This is a clone of Opentable --
                    <br />
                    <br />
                <div>Technologies used: React/Redux, React Hooks, Ruby on Rails, Javascript, PostgreSQL, CSS/HTML, Amazon S3  </div>

                </div>
            </footer>

    </div>
        )
    }
}


const mSTP = state => {

    return {
        restaurants: Object.values(state.entities.restaurants),
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => {
    return {
        fetchAllRests: () => dispatch(fetchAllRests()),
        fetchAllReviews: () => dispatch(fetchAllReviews())
    }
}

export default connect(mSTP, mDTP)(SearchPageRestaurantIndex)