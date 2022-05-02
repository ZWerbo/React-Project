import React from "react";
import { connect } from "react-redux";
import { fetchAllRests } from "../../actions/restaurant_action";
import { fetchAllReviews } from "../../actions/review_action";
import SearchPageRestaurantItem from "./search_page_restaurant_items";
import { FaMoneyBill } from 'react-icons/fa'
import {GrLocation} from 'react-icons/gr'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaAngellist} from 'react-icons/fa'
import { useEffect, useState } from "react";
import {GiKnifeFork} from 'react-icons/gi'


// class SearchPageRestaurantIndex extends React.Component {
//     constructor(props) {
//         super(props)
//         // state = {
//         //     timeout: false
//         // }
//     }

const SearchPageRestaurantIndex = (props) => {


    useEffect(() => {
        props.fetchAllRests()
        props.fetchAllReviews()
    }, [])



 const [isChecked, setIsChecked] = useState('');

//  const [isSoutheast, setIsSoutheast] = useState('Hello')



    const handleOnChange = (e) => {
        if(isChecked === '') {
            setIsChecked(e.target.value)
        } else {
            setIsChecked('')
        }
    };
    // console.log(isChecked)





    const restaurantMatch = (restaurant) => {
        
        if(isChecked !== '') {
            props.setSearchInput = isChecked
        }

        console.log(props.SearchInput)
        if(restaurant.name.toLowerCase().includes(props.searchInput.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(props.searchInput.toLowerCase()) || restaurant.neighborhood.toLowerCase().includes(props.searchInput.toLowerCase())) {
            return <SearchPageRestaurantItem searchInput={props.searchInput} restaurant={restaurant} reviews={props.reviews} key={restaurant.id}/>

        }
    }


        return (
    <div>

            <div className="whole-search-page">
                <div className="left-side-searchpage">
                            <div className="left-buffer-div">

                            </div>

                        <div className="neigh-cuise">


                            <div className="neigborhood-search">
                                <div> <GrLocation/> Neighborhood</div>
                                <br />
                                <div className="neighborhood" ><input value="Southeast" checked={isChecked} onChange={handleOnChange} type="checkbox"/>Southeast</div>
                                <div className="neighborhood"><input  type="checkbox" />Southwest</div>
                                <div className="neighborhood"><input  type="checkbox" />Northeast</div>
                                <div className="neighborhood"><input  type="checkbox" />Nouthwest</div>
                                <div className="neighborhood"><input  type="checkbox" />Pearl District</div>

                            </div>
                            <br />
                         
                            <div className="neigborhood-search">
                                <div className="price-left"> <FaMoneyBill/> Price</div>
                                <div className="price-buttons-money">
                                <button className="money-button" >$</button> <button className="money-button" >$$</button> <button className="money-button" >$$$</button>
                                </div>
                            </div>
                            <br />
                            <div className="neigborhood-search">
                                <div> <GiKnifeFork/> Cuisine</div>
                                <br />
                                <div className="neighborhood" ><input type="checkbox"/>Italian</div>
                                <div className="neighborhood"><input  type="checkbox" />Chinese</div>
                                <div className="neighborhood"><input  type="checkbox" />Burgers</div>
                                <div className="neighborhood"><input  type="checkbox" />Ramen</div>
                                <div className="neighborhood"><input  type="checkbox" />Mexican</div>
                            </div>
                        </div>
                </div>

            <div className="search_page_restaurant_index_outside">
                {
                    props.restaurants.map((restaurant) => { 
                        return restaurantMatch(restaurant)
                        // return <RestaurantIndexItem restaurant={restaurant} reviews={props.reviews} key={restaurant.id}/> 
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
// }


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