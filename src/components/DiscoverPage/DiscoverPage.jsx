import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, updateSearchValue } from '../../actions';
import { v4 } from 'uuid';

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
    const {dispatch, currentRecipe, recipes, searchList, searchValue, user } = this.props;

    //Submit new currentRecipe id
    const handleAddRecipe = () => {
      const newId = v4();
      dispatch(changeCurrentRecipe(newId, user));
    };

    //Toggle recipe header when search is active
    let headerMessage;
    if (searchList) {
      headerMessage = 'Results from Last Search:';
    } else {
      headerMessage = 'Search to find new recipes!';
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
            recipes={searchList}
            currentRecipe={currentRecipe}
            searchValue={null}
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
    searchList: state.lastRecipeSearch.searchList,
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
