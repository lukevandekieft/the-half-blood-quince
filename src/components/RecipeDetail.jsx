import React from "react";
import { Link } from 'react-router-dom';
import AdditionalRecipeDisplay from './AdditionalRecipeDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientDisplay from './IngredientDisplay';
import DirectionDisplay from './DirectionDisplay';

function RecipeDetail(){
  return (
    <div>
      We love recipe detail
      <MainRecipeDisplay />
      <IngredientDisplay />
      <DirectionDisplay />
      <AdditionalRecipeDisplay />
      <Link to='/'><button>Go Back</button>
      </Link>
    </div>
  );
}

export default RecipeDetail;
