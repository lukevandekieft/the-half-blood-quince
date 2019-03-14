import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, updateSearchValue } from '../../actions';
import { v4 } from 'uuid';

import Loader from '../Widgets/Loader/Loader';
import NavButton from '../Widgets/NavButton/NavButton';
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
    const {dispatch, currentRecipe, isFetching, recipes, searchList, searchTerm, searchValue, user } = this.props;

    //Submit new currentRecipe id
    const handleAddRecipe = () => {
      const newId = v4();
      dispatch(changeCurrentRecipe(newId, user));
    };

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
    recipes: state.recipes,
    searchValue: state.searchValue,
    user: state.user,
  };
};

DiscoverPage.propTypes = {
  currentRecipe: PropTypes.string,
  lastRecipeSearch: PropTypes.object,
  recipes: PropTypes.object,
  searchValue: PropTypes.any,
  user: PropTypes.any,

};

export default connect(mapStateToProps)(DiscoverPage);
