import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import StarRating from '../Widgets/StarRating/StarRating';

function RecipeItem({author, dispatch, image, name, rating, recipeStatus, user}) {

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  if (name.length > 35) {
    name = `${name.slice(0, 35)}...`
  }

  if (author && author.length > 35) {
    author = `${name.slice(0, 35)}...`
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
          {author && (
            <p>{author}</p>
          )}
          {rating && (
            <Rating name="read-only" value={rating} readOnly />
          )}
        </div>
        <div className='recipeItemButtonContainer'>
          <div className={recipeStatus === "completed" ? "completedRecipeButton" : recipeStatus === "unfinished" ? "unfinishedRecipeButton" : null}></div>
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
  name: PropTypes.string,
  user: PropTypes.object
};

export default connect(mapStateToProps)(RecipeItem);
