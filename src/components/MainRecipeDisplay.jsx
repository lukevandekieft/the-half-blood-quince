import React from 'react';
import PropTypes from 'prop-types';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';

function MainRecipeDisplay(props){
  const altText = `${props.name} Recipe`
  const backgroundImage = {
    backgroundImage: `url(${props.imageLink})`
  };
  return (
    <div>
      <p>{props.name}</p>
      <div className='recipeDetailPicture' style={backgroundImage} alt={altText}>
      </div>
      <a href={props.url}>Link to Original Recipe</a>
      <NavButton />
      <Link to='/edit-recipe'><button>Edit Recipe</button>
      </Link>
    </div>
  );
}

MainRecipeDisplay.propTypes = {
  name: PropTypes.string,
  imageLink: PropTypes.string,
  url: PropTypes.string
}

export default MainRecipeDisplay;
