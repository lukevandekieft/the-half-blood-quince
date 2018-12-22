import React from 'react';
import PropTypes from 'prop-types';

function IngredientsDisplay(props){
  let formattedIngredientsNotes;
  if (props.ingredientsNotes) {
    formattedIngredientsNotes = props.ingredientsNotes;
  } else {
    formattedIngredientsNotes = [];
  }
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ul>
      <h3>Notes</h3>
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
