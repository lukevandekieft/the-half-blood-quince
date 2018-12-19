import React from 'react';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AdditionalRecipeDisplay(props){
  return (
    <div>
      <a href={props.url}>Link to Original Recipe</a>
      <NavButton />
      <Link to='/edit-recipe'><button>Edit Recipe</button>
      </Link>
    </div>
  );
}

AdditionalRecipeDisplay.propTypes = {
  url: PropTypes.string
}

export default AdditionalRecipeDisplay;
