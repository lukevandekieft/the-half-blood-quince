import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';
import { updateSearchValue, fetchApiSearchList } from '../../../actions';
import { withRouter } from 'react-router-dom';
import FilterList from '../FilterList/FilterList';
import Icon from '@material-ui/core/Icon';

class SearchModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: null,
      searchMenuOpen: false,
      searchValue: ''
    }
  }

  toggleMenuOpen = (menuBoolean) => (event) => {
    this.setState({ searchMenuOpen: menuBoolean });
  };

  //Change search value to user input
  handleSearch = (event) => {
    event.preventDefault();
    let userInput = document.getElementById("recipeSearch").value;
    this.props.dispatch(updateSearchValue(userInput));
    if (this.props.location.pathname === '/discover-recipes') {
      this.props.dispatch(fetchApiSearchList(userInput, this.props.user));
    }
    this.setState({ 
      searchMenuOpen: false,
      searchValue: userInput
     });
  };

  // Modal containing search content
  searchModal = () => (
    <div
      role="presentation"
      className="searchModal" 
    >
      <Icon onClick={this.toggleMenuOpen(false)}>close</Icon>
      <FilterList />
      <form className="searchBox" onSubmit={this.handleSearch.bind(this)}>
        <input 
          type="text" 
          className="searchInput" 
          id='recipeSearch'
          defaultValue={this.state.searchValue}
          ref={ el => this.recipeSearch = el} 
          placeholder={this.state.placeholderText}
          autoFocus={this.state.searchMenuOpen}
        />
        <button className="searchButton" type='submit'>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );

  render () {
    //Sets placeholder based on router
    if (!this.state.placeholderText) {
      if (this.props.location.pathname === '/discover-recipes') {
        this.setState({placeholderText: 'Search New Recipes...'});
      } else {
        this.setState({placeholderText: 'Search Your Recipes...'});
      }
    }

    return (
      <div key={"top"}>
        <button className="searchBox" onClick={this.toggleMenuOpen(true)}>
          <p className="searchInput">{this.state.placeholderText}</p>
          <div className="searchButton">
            <i className="fa fa-search"></i>
          </div>
        </button>
        <SwipeableDrawer
          anchor={"top"}
          open={this.state["searchMenuOpen"]}
          onClose={this.toggleMenuOpen(false)}
          onOpen={this.toggleMenuOpen(true)}
        >
          {this.searchModal()}
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(SearchModal));