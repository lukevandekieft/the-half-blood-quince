import React from 'react';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';

function AdditionalRecipeDisplay(){
  return (
    <div>
      <a href="https://www.seriouseats.com/recipes/2013/02/the-best-vegan-mapo-tofu-recipe.html#comments-23131">Link to Original Recipe</a>
      <NavButton />
      <Link to='/edit-recipe'><button>Edit Recipe</button>
      </Link>
    </div>
  );
}

export default AdditionalRecipeDisplay;
