import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectRecipe } from './../actions';

function RecipeItem({currentRecipe, name, image, dispatch}) {
  const handleClick = (name) => {
    const updatedName = name.toLowerCase().split(' ').join('_');
    dispatch(selectRecipe(updatedName));
  };

  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='recipeItemBox' onClick={() => {handleClick(name)}}>
      <Link to='/recipe-detail'>
        <h3>{name}</h3>
        <div className='recipeItemImageContainer' style={backgroundImage}>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId
  };
};

RecipeItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  keypair: PropTypes.string
}

export default connect(mapStateToProps)(RecipeItem);
