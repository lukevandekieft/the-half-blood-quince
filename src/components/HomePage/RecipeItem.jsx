import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function RecipeItem({dispatch, image, name, user}) {

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className='recipeItemBox'>
      <div className='recipeItemImageContainer'>
        <div className='imagePlaceholder'>
        </div>
        <div className='recipeImage' style={backgroundImage}>
        </div>
      </div>
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
  user: PropTypes.object
};

export default connect(mapStateToProps)(RecipeItem);
