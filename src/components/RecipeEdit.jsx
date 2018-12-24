import React from 'react';
import EditRecipeForm from './EditRecipeForm';
import AddRecipeForm from './AddRecipeForm';
import PropTypes from 'prop-types';

class RecipeEdit extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    let domDisplay;
    if (this.props.loadedInitialState && this.props.recipes[this.props.currentRecipe]) {
      domDisplay =
      <div className='pageContentSection'>
        <EditRecipeForm />
      </div>
    } else if (this.props.loadedInitialState) {
      domDisplay =
      <div className='pageContentSection'>
        <AddRecipeForm />
      </div>
    } else {
      domDisplay =
      <div className='loading'>
        <div className='loader'></div>
      </div>
    }

    return (
      <div>
        {domDisplay}
      </div>
    );
  }
}

RecipeEdit.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default RecipeEdit;
