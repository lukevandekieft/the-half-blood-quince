import React from 'react';
import { Link } from 'react-router-dom';

function RecipeItem(){
  return (
    <Link to='/recipe-detail'>
      <div className='recipeItemBox'>
        <p>Mapo Tofu</p>
        <img src="https://www.seriouseats.com/recipes/images/2013/02/20120206-vegan-mapo-tofu-12.jpg" alt='Mapo Tofu'/>
      </div>
    </Link>
  );
}

export default RecipeItem;
