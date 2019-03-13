import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue, fetchApiSearchList } from '../../../actions';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{

  //Change search value to user input
  handleSearch = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("recipeSearch").value;
    this.props.dispatch(updateSearchValue(userInput));
    if (this.props.location.pathname === '/discover-recipes') {
      this.props.dispatch(fetchApiSearchList(userInput, this.props.user));
    }
  };

  //Cancel existing user search
  handleCancelSearch = () => {
    this.props.dispatch(updateSearchValue(null));
    this.recipeSearch.value = null;
  };

  render() {
    const {searchValue} = this.props;

    //Determines which button to display based on search value
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

    //Sets placeholder based on router
    let placeholderText;
    if (this.props.location.pathname === '/discover-recipes') {
      placeholderText = 'Find New Recipes!';
    } else if (this.props.location.pathname === '/') {
      placeholderText = 'Search Your Recipes...';
    }

    return (
      <form className="searchBox" onSubmit={this.handleSearch.bind(this)}>
        <input type="text" className="searchInput" id='recipeSearch' ref={ el => this.recipeSearch = el} placeholder={placeholderText}/>
        {searchButton}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(SearchBar));
