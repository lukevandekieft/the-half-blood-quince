import React from 'react';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe } from './../actions';

function EditRecipeForm({currentRecipe, recipes, name, url, image, ingredients, ingredientsNotes, directions, directionsNotes, dispatch}){

  let _name = null;
  let _url = null;
  let _imageLink = null;
  let _ingredients = null;
  let _ingredientsNotes = null;
  let _directions = null;
  let _directionsNotes = null;

  const readableArray = (array) => {
    if(array) {
      return `- ${array.join('\n\n- ')}`;
    } else {
      return [];
    }
  }
  const createArray = (string) => {
    if(string) {
      string = `\n\n${string}`;
      let newArray = string.split('\n\n- ');
      newArray.shift();
      return newArray;
    } else {
      return [];
    }
  }
  const submitForm = (event) => {
    event.preventDefault();
    recipes[currentRecipe] = {
      name: _name.value,
      url: _url.value,
      imageLink: _imageLink.value,
      ingredients: createArray(_ingredients.value),
      ingredientsNotes: createArray(_ingredientsNotes.value),
      directions: createArray(_directions.value),
      directionsNotes: createArray(_directionsNotes.value)
    }
    dispatch(submitRecipe(recipes));
  }

  let formatIngredients = readableArray(ingredients);
  let formatIngredientsNotes = readableArray(ingredientsNotes);
  let formatDirections = readableArray(directions);
  let formatDirectionsNotes = readableArray(directionsNotes);

  return (
    <div>
      <form className='formLayout' onSubmit={submitForm}>
        <div className='formInputLayout'>
          <label>Recipe Name:</label>
          <input
            type="text"
            defaultValue={name}
            id='name'
            ref={(input) => {_name = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link:</label>
          <input
            type="text"
            defaultValue={url}
            id='url'
            ref={(input) => {_url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture (link to picture):</label>
          <input
            type="text"
            defaultValue={image}
            id='imageLink'
            ref={(input) => {_imageLink = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients:</label>
          <textarea
            defaultValue={formatIngredients}
            id='ingredients'
            ref={(input) => {_ingredients = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes:</label>
          <textarea
            defaultValue={formatIngredientsNotes}
            id='ingredientsNotes'
            ref={(input) => {_ingredientsNotes = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions:</label>
          <textarea
            defaultValue={formatDirections}
            id='directions'
            ref={(input) => {_directions = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes:</label>
          <textarea
            defaultValue={formatDirectionsNotes}
            id='directionsNotes'
            ref={(input) => {_directionsNotes = input;}}
          ></textarea>
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
    recipes: state.recipes,
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
