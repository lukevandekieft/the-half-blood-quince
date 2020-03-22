import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe } from '../../actions';

function RecipeItem({dispatch, image, name, user, valueKey}) {

  //Change currentRecipe to clicked item
  const handleClick = (key) => {
    dispatch(changeCurrentRecipe(key, user));
  };

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='recipeItemBox' onClick={() => {handleClick(valueKey);}}>
      <Link to={`/recipe/${valueKey}`}>
        <h3>{name}</h3>
        <div className='recipeItemImageContainer'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage' style={backgroundImage}>
          </div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

RecipeItem.propTypes = {
  image: PropTypes.string,
  keypair: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.object,
  valueKey: PropTypes.string
};

export default connect(mapStateToProps)(RecipeItem);
