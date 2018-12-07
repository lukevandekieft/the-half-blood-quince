import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList(){
  let recipeItemStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: '-20px'
  };
  return (
    <div style={recipeItemStyles}>
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
      <RecipeItem />
    </div>
  );
}

export default RecipeList;
