import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { connect } from 'react-redux';
import { updateSearchValue, fetchApiSearchList } from '../../../actions';
import { withRouter } from 'react-router-dom';
import FilterList from '../FilterList/FilterList';
import { updateFilterList } from '../../../actions';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

class SearchModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: null,
      searchMenuOpen: false,
      searchValue: ''
    }
  }

  componentWillUnmount() {
    this.props.dispatch(
      updateFilterList(
        this.props.filterList.concat = []
      )
    );
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
      <IconButton onClick={this.toggleMenuOpen(false)} className="closeIcon">
        <i className="fa fa-times"></i>
      </IconButton>
      <FilterList />
      <form className="searchBoxModal" onSubmit={this.handleSearch.bind(this)}>
        <Input 
          id="recipeSearch" 
          type="search"
          placeholder="Search" 
          defaultValue={this.state.searchValue}
          ref={ el => this.recipeSearch = el} 
          autoFocus={window.innerWidth > 900 ? this.state.searchMenuOpen : false}
          endAdornment={
            <InputAdornment position="end">
              <IconButton className="searchButton" type='submit'>
                <i className="fa fa-search"></i>
              </IconButton>
            </InputAdornment>
          }
        />
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
        <Fab color="primary" aria-label="add" onClick={this.toggleMenuOpen(true)}>
          <Icon>search</Icon>
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterList: state.filterList,
    searchValue: state.searchValue,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(SearchModal));