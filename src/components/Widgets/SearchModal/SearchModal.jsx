import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { updateSearchValue, fetchApiSearchList } from '../../../actions';
import { withRouter } from 'react-router-dom';

class SearchModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: null,
      searchMenuOpen: false
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
    this.setState({ searchMenuOpen: false });
  };

  // Modal containing search content
  searchModal = () => (
    <div
      role="presentation"
      className="searchModal" 
    >
      <form className="searchBox" onSubmit={this.handleSearch.bind(this)}>
        <input type="text" className="searchInput" id='recipeSearch' ref={ el => this.recipeSearch = el} placeholder={this.state.placeholderText}/>
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