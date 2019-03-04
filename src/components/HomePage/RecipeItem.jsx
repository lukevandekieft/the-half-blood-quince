import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe } from '../../actions';

function RecipeItem({currentRecipe, name, image, valueKey, user, dispatch}) {

  const handleClick = (key) => {
    console.log(key)
    console.log(user)
    dispatch(changeCurrentRecipe(key, user));
  };

  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='recipeItemBox' onClick={() => {handleClick(valueKey)}}>
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
    currentRecipe: state.currentRecipeId,
    user: state.user,
  };
};

RecipeItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  keypair: PropTypes.string,
  valueKey: PropTypes.string
}

export default connect(mapStateToProps)(RecipeItem);
