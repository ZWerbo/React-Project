import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar =({searchResult, searchInput, setSearchInput}) => {
    // console.log(setUpdated)
    // const [searchInput, setSearchInput] = useState('')

    const update = (e) => {
        
        setSearchInput(e.target.value) 
        // setUpdated(Math.random() * 1000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for(let i = 0; i < searchResult.length; i++) {
            if(searchResult[i].name.includes(searchInput) || searchResult[i].cuisine.includes(searchInput)) {
                
            }
        }

    }

        return (
            <div>

              
            <div className="index-page-search-box" >
                <div className="find-table-box">
               <h1 className="Find-your-table-search">
                Find your table for your next occasion
               </h1>
                </div>
          
               <div className="search-bar-component-container">
                   <form action="">
                   <input 
                            type="date" 
                            className="search-bar-input-date"
                            // defaultValue={today}
                            // min={today}
                        />
                   <select className="search-bar-input-time" defaultValue="11:00">
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                    <select className="search-bar-people-dropdown" defaultValue="2">
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                        <option value="9">9 people</option>
                        <option value="10">10 people</option>
                    </select>
                    {/* <input type="text" className="search-input-searchbar" /> */}
                    <input type="text" className="search-input-searchbar" placeholder="Restaurant, or Cuisine" value={searchInput} onChange={update} />
                    <Link to={'/search'}>
                    <button className="search-bar-button">Lets go</button>
                    </Link>
                   </form>
               </div>
             
            </div>


            </div>
        )
}

export default SearchBar