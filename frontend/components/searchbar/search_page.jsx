import SearchbarContainer from "../searchbar/searchbar_container";
import RestaurantIndexContainer from "../restaurant/restaurant_index_container";
import { useState } from "react";
import React from "react";
import SearchPageBar from "./searchbar_searchpage";
import SearchPageRestaurants from "./search_page_restaurants";

const SearchPage = ({}) => {
    const [searchInput, setSearchInput] =  useState('')
    return (
        <div>
            <SearchPageBar searchInput={searchInput} setSearchInput={setSearchInput} />
            <SearchPageRestaurants searchInput={searchInput} />
        </div>
    )
}

export default SearchPage
