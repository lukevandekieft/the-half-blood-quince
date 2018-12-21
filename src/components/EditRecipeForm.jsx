import React from 'react';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EditRecipeForm({currentRecipe, name}){
  console.log(name)
  return (
    <div>
      <form>
        <label>Recipe Name</label>
        <input type="text" defaultValue={currentRecipe}></input>
        <label>Recipe Link</label>
        <input type="text"></input>
        <label>Recipe Picture (link to picture)</label>
        <input type="text"></input>
        <label>Ingredients</label>
        <textarea></textarea>
        <label>Ingredient Notes</label>
        <textarea></textarea>
        <label>Directions</label>
        <textarea></textarea>
        <label>Direction Notes</label>
        <textarea></textarea>
        <button type="submit" className='navButtonStyle'>Submit</button>
      </form>
      <NavButton
      linkPath='/'
      linkText='Cancel Changes'
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    name: state.recipes[state.currentRecipeId].name
  };
};

export default connect(mapStateToProps)(EditRecipeForm);
