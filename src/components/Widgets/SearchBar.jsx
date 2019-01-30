import React from 'react';

function SearchBar(){
  return (
    <div class="searchWrapper">
       <div class="searchBox">
          <input type="text" class="searchInput" placeholder="What are you looking for?"/>
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
         </button>
       </div>
    </div>
  );
}

export default SearchBar;
