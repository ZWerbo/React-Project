import React, { useEffect, useState } from "react";

const SearchPageBar =({searchResult, searchInput, setSearchInput}) => {
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

              
            <div className="search-page-search-box" >
                <div className="find-table-box">
               <h1 className="what-are-you">
                What are you looking for?
               </h1>
                </div>
          
               <div className="searchpage-bar-component-container">
                   <form action="">
               
                
                    {/* <input type="text" className="search-input-searchbar" /> */}
                    <input type="text" className="searchpage-input-searchbar" placeholder="Neighborhood, Restaurant, or Cuisine" value={searchInput} onChange={update} />
                    <button onSubmit={handleSubmit} className="search-bar-button">Find a table</button>
                   </form>
               </div>
             
            </div>


            </div>
        )
}

export default SearchPageBar