import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import FilterList from '../Widgets/FilterList/FilterList';
import NavButton from '../Widgets/NavButton/NavButton';
import RecipeList from './RecipeList';
import SearchBar from '../Widgets/SearchBar/SearchBar';

class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filterList: [],
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  }

  handleFilterChange = (tag) => {
    if (this.state.filterList.includes(tag)) {
      this.setState({filterList: this.state.filterList.filter(e => e !== tag)})
    } else {
      this.setState({filterList: this.state.filterList.concat(tag)})
    }
  }

  render() {
    const {dispatch, recipes, searchValue, user } = this.props;

    //Toggle recipe header when search is active
    let headerMessage;
    if (searchValue) {
      headerMessage = 'Search Results:';
    } else {
      headerMessage = 'Current Recipes';
    }

    return (
      <div className='contentContainer'>
        <div className='headerSection homePage'>
          <SearchBar />
          <FilterList 
            handleChange={this.handleFilterChange}
            tags={this.state.filterList}
          />
        </div>
        <div className='pageContentSection headerPage'>
          <h1 className='headline'>{headerMessage}</h1>
          {(user !== 'initialLoadUser') && (
            <RecipeList
              filterList={this.state.filterList}
              recipes={recipes}
              searchValue={searchValue}
            />
          )}
          {(user !== 'initialLoadUser' && !recipes) && (
            <div className='emptyContentMessage'>
              <h2>There's nothing here!</h2>
              <p>Select <Link to='/discover-recipes'>Discover Recipes</Link> to find new recipes or click <Link to='/edit-recipe'>Add Recipe</Link> below to create your own!</p>
            </div>
          )}
          <NavButton
            linkPath='/add-recipe'
            linkText='Add Recipe'
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    searchValue: state.searchValue,
    user: state.user,
  };
};

HomePage.propTypes = {
  recipes: PropTypes.object,
  searchValue: PropTypes.any,
  user: PropTypes.any,

};

export default connect(mapStateToProps)(HomePage);
