import React from 'react';
import AdditionalRecipeDisplay from './AdditionalRecipeDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientDisplay from './IngredientDisplay';
import DirectionDisplay from './DirectionDisplay';
import NavButton from './NavButton';

function RecipeDetail(){
  let detailStyles = {
    display: 'flex',
    flexDirection: 'column'
  }
  let directionDisplayStyles = {
    display: 'flex'
  }
  return (
    <div className='pageContentSection' style={detailStyles}>
      <MainRecipeDisplay />
      <AdditionalRecipeDisplay />
      <div style={directionDisplayStyles}>
        <IngredientDisplay />
        <DirectionDisplay />
      </div>
      <NavButton />
    </div>
  );
}

export default RecipeDetail;
