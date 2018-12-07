import React from 'react';
import { Link } from 'react-router-dom';

function RecipeItem(){
  return (
    <div>
      <Link to='/recipe-detail'>
        <p>Mapo Tofu</p>
        <img src="https://www.seriouseats.com/recipes/images/2013/02/20120206-vegan-mapo-tofu-12.jpg" alt='Mapo Tofu'/>
      </Link>
    </div>
  );
}

export default RecipeItem;
