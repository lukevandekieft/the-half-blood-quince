import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';

class SearchBar extends React.Component{

  handleSearch = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("recipeSearch").value;
    console.log(userInput);
    this.props.dispatch(updateSearchValue(userInput));
  };

  render() {
    const {dispatch, searchValue} = this.props;

    let searchButton;
    if (searchValue) {
      searchButton =
      <button className="searchButton" type='submit'>
        <i className="fa fa-search"></i>
      </button>
    } else {
      searchButton =
      <button className="searchButton" type='submit'>
        <i className="fa fa-search"></i>
      </button>
    }

    return (
      <form className="searchBox" onSubmit={this.handleSearch.bind(this)}>
        <input type="text" className="searchInput" id='recipeSearch' placeholder="Search Your Recipes..."/>
        {searchButton}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(SearchBar);
