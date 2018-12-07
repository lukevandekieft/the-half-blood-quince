import React from 'react';
import AdditionalRecipeDisplay from './AdditionalRecipeDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientDisplay from './IngredientDisplay';
import DirectionDisplay from './DirectionDisplay';
import NavButton from './NavButton';

function RecipeDetail(){
  return (
    <div>
      We love recipe detail
      <MainRecipeDisplay />
      <IngredientDisplay />
      <DirectionDisplay />
      <AdditionalRecipeDisplay />
      <NavButton />
    </div>
  );
}

export default RecipeDetail;
