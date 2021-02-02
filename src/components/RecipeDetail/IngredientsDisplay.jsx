import React from 'react';
import PropTypes from 'prop-types';

function IngredientsDisplay(props){

  // Format IngredientsNotes section
  let headerSection = null;
  let formattedIngredientsNotes;
  if (props.ingredientsNotes) {
    formattedIngredientsNotes = props.ingredientsNotes;
    headerSection =
      <React.Fragment>
        <h3>Ingredient Notes</h3>
        <ul>
          {formattedIngredientsNotes.map(index => {
            return <li key={index} className="recipeDetailList">{index}</li>;
          })}
        </ul>
      </React.Fragment>;
  } else {
    formattedIngredientsNotes = null;
  }

  // Format Ingredients section
  let formattedIngredients;
  if (props.ingredients) {
    formattedIngredients =
      <React.Fragment>
        <h3>Ingredients</h3>
        <ul>
          {props.ingredients.map(index => {
            return <li key={index} className="recipeDetailList">{index}</li>;
          })}
        </ul>
      </React.Fragment>;
  } else {
    formattedIngredients = null;
  }

  return (
    <div>
      {formattedIngredients}
      {headerSection}
    </div>
  );
}

export default IngredientsDisplay;
