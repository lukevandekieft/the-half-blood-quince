import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeItem(props){

  let backgroundImage = {
    backgroundImage: `url(${props.image})`
  };
  return (
    <Link to='/recipe-detail' className='recipeItemBox'>
        <h3>{props.name}</h3>
        <div className='recipeItemImageContainer' style={backgroundImage}>
        </div>
    </Link>
  );
}

RecipeItem.propTypes = {
  recipes: PropTypes.object
}

export default RecipeItem;


// <img src={props.image} alt='Mapo Tofu'/>
