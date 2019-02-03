import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';

function SearchBar({dispatch}){

  const handleSearch = (userInput) => {
    console.log(userInput);
    dispatch(updateSearchValue(userInput));
  };

  return (
    <div className="searchBox">
      <input type="text" className="searchInput" id='recipeSearch' placeholder="Search Your Recipes..."/>
      <button onClick={() => {handleSearch(document.getElementById("recipeSearch").value)}} className="searchButton">
        <i className="fa fa-search"></i>
     </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(SearchBar);
