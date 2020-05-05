import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function RecipeItem({dispatch, image, name, user, valueKey}) {

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='recipeItemBox'>
      <Link to={`/recipe/${valueKey}`}>
        <div className='recipeItemImageContainer'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage' style={backgroundImage}>
          </div>
        </div>
      </Link>
      <h3>{name}</h3>
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
