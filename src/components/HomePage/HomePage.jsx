import React from 'react';
import RecipeList from './RecipeList';
import SearchBar from '../Widgets/SearchBar';
import NavButton from '../Widgets/NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe } from '../../actions';
import { v4 } from 'uuid';

class HomePage extends React.Component{

  headlineStyles = {
    fontSize: '2em',
    padding: '20px 0'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    const {dispatch, currentRecipe} = this.props;

    const handleClick = () => {
      const newId = v4();
      console.log(newId);
      dispatch(changeCurrentRecipe(newId));
    };

    const loadingRecipe = this.props.loadedInitialState;
    let domDisplay;
    if(loadingRecipe === false) {
      domDisplay =
      <div className='loading'>
      <div className='headerSection'></div>
        <div className='loaderHome'></div>
      </div>
    } else {
      domDisplay =
      <div className='homePageContainer'>
        <div className='headerSection'>
          <SearchBar />
        </div>
        <div className='pageContentSection'>
        <p style={this.headlineStyles}>Current Recipes</p>
        <RecipeList
        recipes={this.props.recipes}
        currentRecipe={currentRecipe}
        />
        <NavButton
        linkPath='/'
        linkText='Delete Recipe(s)'
        />
        <div onClick={() => {handleClick()}}>
          <NavButton
          linkPath='/edit-recipe'
          linkText='Add Recipe'
          />
        </div>
        </div>
      </div>
    }
    return (
      <div>
        {domDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId
  };
};

HomePage.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default connect(mapStateToProps)(HomePage);
