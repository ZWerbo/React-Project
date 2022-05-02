import { useState } from "react";
import React from "react";
import SearchPageBar from "./searchbar_searchpage";
import SearchPageRestaurants from "./search_page_restaurants";

const SearchPage = ({}) => {
    const [searchInput, setSearchInput] =  useState('')
    return (
        <div>
            <SearchPageBar searchInput={searchInput} setSearchInput={setSearchInput} />
            <SearchPageRestaurants searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
    )
}

export default SearchPage
