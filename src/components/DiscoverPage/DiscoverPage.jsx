import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';

import Loader from '../Widgets/Loader/Loader';
import RecipeList from '../HomePage/RecipeList';
import SearchBar from '../Widgets/SearchBar/SearchBar';

class DiscoverPage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  }

  render() {
    const {currentRecipe, isFetching, searchList, searchTerm, user } = this.props;

    //Toggle recipe header when search is active
    let headerMessage;
    if (searchTerm) {
      headerMessage = `Showing results for '${searchTerm}'`;
    } else {
      headerMessage = 'Search to find new recipes!';
    }

    let recipeDisplay;
    if(isFetching) {
      recipeDisplay =
        <Loader
          sectionLoader = {true}
        />;
    } else {
      recipeDisplay =
        <React.Fragment>
          <h1 className='headline'>{headerMessage}</h1>
          {(user !== 'initialLoadUser') && (
            <RecipeList
              recipes={searchList}
              currentRecipe={currentRecipe}
              searchValue={null}
            />
          )}
        </React.Fragment>;
    }

    return (
      <div className='contentContainer'>
        <div className='headerSection discoverPage'>
          <SearchBar />
        </div>
        <div className='pageContentSection headerPage'>
          {recipeDisplay}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    isFetching: state.lastRecipeSearch.isFetching,
    searchList: state.lastRecipeSearch.searchList,
    searchTerm: state.lastRecipeSearch.searchTerm,
    user: state.user,
  };
};

DiscoverPage.propTypes = {
  currentRecipe: PropTypes.string,
  isFetching: PropTypes.bool,
  lastRecipeSearch: PropTypes.object,
  searchList: PropTypes.object,
  searchTerm: PropTypes.string,
  user: PropTypes.any,

};

export default connect(mapStateToProps)(DiscoverPage);
