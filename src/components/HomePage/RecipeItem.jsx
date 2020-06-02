import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StarRating from '../Widgets/StarRating/StarRating';

function RecipeItem({dispatch, image, name, rating, user}) {

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  if (name.length > 35) {
    name = `${name.slice(0, 35)}...`
  }

  return (
    <div className='recipeItemBox'>
      <div className='recipeItemImageContainer'>
        <div className='imagePlaceholder'>
        </div>
        <div className='recipeImage' style={backgroundImage}>
        </div>
      </div>
      <div className='recipeBottomSection'>
        <div className='recipeItemTextContainer'>
          <h3>{name}</h3>
          {rating && (
            <StarRating 
              rating={rating}
              displayType={"readOnly"}
            />
          )}
        </div>
        <div className='recipeItemButtonContainer'>
          <div className="madeRecipeButton"></div>
        </div>
      </div>
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
