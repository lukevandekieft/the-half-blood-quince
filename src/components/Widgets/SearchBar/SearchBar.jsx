import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../../actions';

class SearchBar extends React.Component{

  handleSearch = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("recipeSearch").value;
    this.props.dispatch(updateSearchValue(userInput));
  };

  handleCancelSearch = () => {
    this.props.dispatch(updateSearchValue(null));
    this.recipeSearch.value = null;
  };

  render() {
    const {searchValue} = this.props;

    let searchButton;
    if (searchValue) {
      searchButton =
      <a className="searchButton" type='reset' onClick={() => {this.handleCancelSearch()}}>
        <i className="fas fa-times iconStyle"></i>
      </a>
    } else {
      searchButton =
      <button className="searchButton" type='submit'>
        <i className="fa fa-search iconStyle"></i>
      </button>
    }

    return (
      <form className="searchBox" onSubmit={this.handleSearch.bind(this)}>
        <input type="text" className="searchInput" id='recipeSearch' ref={ el => this.recipeSearch = el} placeholder="Search Your Recipes..."/>
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
