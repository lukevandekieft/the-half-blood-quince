import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, updateSearchValue } from '../../actions';
import { v4 } from 'uuid';

import NavButton from '../Widgets/NavButton/NavButton';
import RecipeList from './RecipeList';
import SearchBar from '../Widgets/SearchBar/SearchBar';

class HomePage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  }

  render() {
    const {dispatch, currentRecipe, recipes, searchValue, user } = this.props;

    //Submit new currentRecipe id
    const handleAddRecipe = () => {
      const newId = v4();
      dispatch(changeCurrentRecipe(newId, user));
    };

    //Toggle recipe header when search is active
    let headerMessage;
    if (searchValue) {
      headerMessage = 'Search Results:';
    } else {
      headerMessage = 'Current Recipes';
    }

    return (
      <div className='contentContainer'>
        <div className='headerSection'>
          <SearchBar />
        </div>
        <div className='pageContentSection headerPage'>
          <h1 className='headline'>{headerMessage}</h1>
          {(user !== 'initialLoadUser') && (
          <RecipeList
            recipes={recipes}
            currentRecipe={currentRecipe}
            searchValue={searchValue}
          />
          )}
          <div onClick={() => {handleAddRecipe();}}>
            <NavButton
              linkPath='/edit-recipe'
              linkText='Add Recipe'
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    recipes: state.recipes,
    searchValue: state.searchValue,
    user: state.user,
  };
};

HomePage.propTypes = {
  currentRecipe: PropTypes.string,
  recipes: PropTypes.object,
  searchValue: PropTypes.any,
  user: PropTypes.any,

};

export default connect(mapStateToProps)(HomePage);
