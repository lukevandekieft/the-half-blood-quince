import React from 'react';
import PropTypes from 'prop-types';

function MainRecipeDisplay(props){
  const altText = `${props.name} Recipe`

  return (
    <div>
      <p>{props.name}</p>
      <img src={props.image_link} alt={altText} />
    </div>
  );
}

MainRecipeDisplay.propTypes = {
  name: PropTypes.string,
  image_link: PropTypes.string
}

export default MainRecipeDisplay;
