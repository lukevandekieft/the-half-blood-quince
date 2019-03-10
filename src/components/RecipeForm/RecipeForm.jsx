import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

class RecipeEdit extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    let domDisplay;
    if (this.props.recipes) {
      if (this.props.recipes[this.props.currentRecipe]) {
        domDisplay =
        <div className='pageContentSection'>
        <EditRecipeForm />
        </div>
      } else {
        domDisplay =
        <div className='pageContentSection'>
          <AddRecipeForm />
        </div>
      }
    } else {
      domDisplay =
      <div className='pageContentSection'>
        <AddRecipeForm />
      </div>
    }

    return (
      <div className='contentContainer'>
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
  };
};

RecipeEdit.propTypes = {
  currentRecipe: PropTypes.string,
  loadedInitialState: PropTypes.bool,
  recipes: PropTypes.object,
}

export default connect(mapStateToProps)(RecipeEdit);
