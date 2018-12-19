import React from 'react';
import PropTypes from 'prop-types';

function MainRecipeDisplay(props){
  const altText = `${props.name} Recipe`

  return (
    <div>
      <p>{props.name}</p>
      <img src={props.imageLink} alt={altText} />
    </div>
  );
}

MainRecipeDisplay.propTypes = {
  name: PropTypes.string,
  imageLink: PropTypes.string
}

export default MainRecipeDisplay;
