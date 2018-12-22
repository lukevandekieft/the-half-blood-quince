import React from 'react';
import EditRecipeForm from './EditRecipeForm';
import PropTypes from 'prop-types';

class RecipeEdit extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    const currentRecipe = this.props.currentRecipe;
    let domDisplay;
    if (currentRecipe) {
      domDisplay =
      <div className='pageContentSection'>
        <EditRecipeForm />
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
