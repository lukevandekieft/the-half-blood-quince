import React from 'react';
import PropTypes from 'prop-types';

import AdditionalRecipeDisplay from './AdditionalRecipeDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientDisplay from './IngredientDisplay';
import DirectionDisplay from './DirectionDisplay';
import NavButton from './NavButton';

function RecipeDetail(props){
  let detailStyles = {
    display: 'flex',
    flexDirection: 'column'
  }
  let directionDisplayStyles = {
    display: 'flex'
  }
  console.log(props)
  return (
    <div className='pageContentSection' style={detailStyles}>
      <MainRecipeDisplay
        name = {props.recipes[props.currentRecipe].name}
        image_link = {props.recipes[props.currentRecipe].image_link}
      />
      <AdditionalRecipeDisplay />
      <div style={directionDisplayStyles}>
        <IngredientDisplay />
        <DirectionDisplay />
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
