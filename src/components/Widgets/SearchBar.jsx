import React from 'react';

function SearchBar(){
  return (
    <div className="searchBox">
      <input type="text" className="searchInput" placeholder="Search Your Recipes..."/>
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
     </button>
    </div>
  );
}

export default SearchBar;
