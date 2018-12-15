import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeItem(props){
  return (
    <Link to='/recipe-detail' className='recipeItemBox'>
        <h3>{props.name}</h3>
        <div className='recipeItemImageContainer'>
          <img src="https://www.seriouseats.com/recipes/images/2013/02/20120206-vegan-mapo-tofu-12.jpg" alt='Mapo Tofu'/>
        </div>
    </Link>
  );
}

RecipeItem.propTypes = {
  recipes: PropTypes.object
}

export default RecipeItem;
