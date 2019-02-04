import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';

function SearchBar({dispatch}){

  const handleSearch = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("recipeSearch").value;
    console.log(userInput);
    dispatch(updateSearchValue(userInput));
  };

  return (
    <form className="searchBox" onSubmit={handleSearch.bind(this)}>
      <input type="text" className="searchInput" id='recipeSearch' placeholder="Search Your Recipes..."/>
      <button className="searchButton" type='submit'>
        <i className="fa fa-search"></i>
     </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(SearchBar);
