import React from 'react';
import PropTypes from 'prop-types';

function IngredientsDisplay(props){
  let formattedIngredientsNotes;
  if (props.ingredientsNotes) {
    formattedIngredientsNotes = props.ingredientsNotes;
  } else {
    formattedIngredientsNotes = [];
  }
  let formattedIngredients;
  if (props.ingredients) {
    formattedIngredients = props.ingredients;
  } else {
    formattedIngredients = [];
  }
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {formattedIngredients.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ul>
      <h3>Ingredient Notes</h3>
      <ul>
        {formattedIngredientsNotes.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ul>
    </div>
  );
}

IngredientsDisplay.propTypes = {
  ingredients: PropTypes.array,
  ingredientsNotes: PropTypes.array
}

export default IngredientsDisplay;
