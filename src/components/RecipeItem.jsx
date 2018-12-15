import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeItem(props){
  return (
    <Link to='/recipe-detail' className='recipeItemBox'>
        <h3>{props.name}</h3>
        <div className='recipeItemImageContainer'>
          <img src={props.image} alt='Mapo Tofu'/>
        </div>
    </Link>
  );
}

RecipeItem.propTypes = {
  recipes: PropTypes.object
}

export default RecipeItem;
