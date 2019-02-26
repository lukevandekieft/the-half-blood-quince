import React from 'react';
import RecipeList from './RecipeList';
import SearchBar from '../Widgets/SearchBar';
import NavButton from '../Widgets/NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, updateSearchValue } from '../../actions';
import { v4 } from 'uuid';

class HomePage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  };

  render() {
    const {dispatch, currentRecipe, loadedInitialState, recipes, searchValue } = this.props;

    const handleRecipeClick = () => {
      const newId = v4();
      console.log(newId);
      dispatch(changeCurrentRecipe(newId));
    };

    let headerMessage;
    if (searchValue) {
      headerMessage = 'Search Results:';
    } else {
      headerMessage = 'Current Recipes';
    }

    const loadingRecipe = loadedInitialState;
    let domDisplay;
    if(loadingRecipe === false) {
      domDisplay =
      <div className='loading'>
        <div className='loaderHome'></div>
      </div>
    } else {
      domDisplay =
      <div className='pageContentSection homepage'>
        <h1 className='headline'>{headerMessage}</h1>
        <RecipeList
          recipes={recipes}
          currentRecipe={currentRecipe}
          searchValue={searchValue}
        />
        <div onClick={() => {handleRecipeClick()}}>
          <NavButton
          linkPath='/edit-recipe'
          linkText='Add Recipe'
          />
        </div>
      </div>
    }
    return (
      <div className='homePageContainer'>
        <div className='headerSection'>
          <SearchBar />
        </div>
        {domDisplay}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    loadedInitialState: state.loadedInitialState,
    recipes: state.recipes,
    searchValue: state.searchValue,
  };
};

HomePage.propTypes = {
  currentRecipe: PropTypes.string,
  loadedInitialState: PropTypes.bool,
  recipes: PropTypes.object,
  searchValue: PropTypes.any,

}

export default connect(mapStateToProps)(HomePage);

//
// <NavButton
// linkPath='/'
// linkText='Delete Recipe(s)'
// />
