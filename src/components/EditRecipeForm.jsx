import React from 'react';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function EditRecipeForm({currentRecipe, name, url, image, ingredients, ingredientsNotes, directions, directionsNotes}){
  const readableArray = (array) => {
    return `- ${array.join('\n\n- ')}`;
  }
  const createArray = (string) => {
    string = `\n\n${string}`;
    let newArray = string.split('\n\n- ');
    newArray.shift();
    return newArray;
  }

  let formatIngredients = readableArray(ingredients);
  let formatIngredientsNotes = readableArray(ingredientsNotes);
  let formatDirections = readableArray(directions);
  let formatDirectionsNotes = readableArray(directionsNotes);

  return (
    <div>
      <form className='formLayout'>
        <div className='formInputLayout'>
          <label>Recipe Name:</label>
          <input type="text" defaultValue={name}></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link:</label>
          <input type="text" defaultValue={url}></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture (link to picture):</label>
          <input type="text" defaultValue={image}></input>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients:</label>
          <textarea defaultValue={formatIngredients}></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes:</label>
          <textarea defaultValue={formatIngredientsNotes}></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions:</label>
          <textarea defaultValue={formatDirections}></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes:</label>
          <textarea defaultValue={formatDirectionsNotes}></textarea>
        </div>
        <div className='centerMe'>
          <button type="submit" className='navButtonStyle'>Submit</button>
        </div>
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
    url: state.recipes[state.currentRecipeId].url,
    image: state.recipes[state.currentRecipeId].imageLink,
    name: state.recipes[state.currentRecipeId].name,
    ingredients: state.recipes[state.currentRecipeId].ingredients,
    ingredientsNotes: state.recipes[state.currentRecipeId].ingredientsNotes,
    directions: state.recipes[state.currentRecipeId].directions,
    directionsNotes: state.recipes[state.currentRecipeId].directionsNotes
  };
};

export default connect(mapStateToProps)(EditRecipeForm);
