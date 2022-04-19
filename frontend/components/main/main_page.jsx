import SearchbarContainer from "../searchbar/searchbar_container";
import RestaurantIndexContainer from "../restaurant/restaurant_index_container";
import { useState } from "react";
import React from "react";

const MainPage = () => {
    const [searchInput, setSearchInput] =  useState('')
    return (
        <div>
            <SearchbarContainer searchInput={searchInput} setSearchInput={setSearchInput} />
            <RestaurantIndexContainer searchInput={searchInput} />
        </div>
    )
}

export default MainPage