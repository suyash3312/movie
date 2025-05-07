import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="./Vector.png" alt=""/>

                <input type="text"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       placeholder="Search through thousands of movies..."/>
            </div>
        </div>
    )
}
export default Search