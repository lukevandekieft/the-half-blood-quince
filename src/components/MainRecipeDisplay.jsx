import React from 'react';
import PropTypes from 'prop-types';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';

function MainRecipeDisplay(props){
  const altText = `${props.name} Recipe`
  const backgroundImage = {
    backgroundImage: `url(${props.imageLink})`
  };
  const mainRecipeContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2em -4em 2em 3em'
  };
  const mainDetailContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto'
  };
  return (
    <div style={mainRecipeContainer}>
      <div className='recipeDetailPicture' style={backgroundImage} alt={altText}>
      </div>
      <div style={mainDetailContainer}>
        <h1>{props.name}</h1>
        <a href={props.url}>Link to Original Recipe</a>
        <NavButton />
        <Link to='/edit-recipe'><button>Edit Recipe</button>
        </Link>
      </div>
    </div>
  );
}

MainRecipeDisplay.propTypes = {
  name: PropTypes.string,
  imageLink: PropTypes.string,
  url: PropTypes.string
}

export default MainRecipeDisplay;
