import React from 'react';
import EditRecipeForm from './EditRecipeForm';
import AddRecipeForm from './AddRecipeForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class RecipeEdit extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    let domDisplay;
    if (this.props.loadedInitialState && this.props.recipes) {
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
