import React from 'react';
import PropTypes from 'prop-types';

import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import DirectionsDisplay from './DirectionsDisplay';
import NavButton from './NavButton';

function RecipeDetail(props){
  let detailStyles = {
    display: 'flex',
    flexDirection: 'column'
  }
  let directionDisplayStyles = {
    display: 'grid',
    gridTemplate: 'auto / 1.3fr 3fr',
    gridColumnGap: '50px'
  }
  return (
    <div className='pageContentSection' style={detailStyles}>
      <MainRecipeDisplay
        name = {props.recipes[props.currentRecipe].name}
        imageLink = {props.recipes[props.currentRecipe].imageLink}
        url = {props.recipes[props.currentRecipe].url}
      />
      <div style={directionDisplayStyles}>
        <IngredientsDisplay
          ingredients = {props.recipes[props.currentRecipe].ingredients}
          ingredientsNotes = {props.recipes[props.currentRecipe].ingredientsNotes}
        />
        <DirectionsDisplay
          directions = {props.recipes[props.currentRecipe].directions}
          directionsNotes = {props.recipes[props.currentRecipe].directionsNotes}
        />
      </div>
      <NavButton />
    </div>
  );
}

RecipeDetail.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default RecipeDetail;
