import React from 'react';
import PropTypes from 'prop-types';

function DirectionsDisplay(props){
  let formattedDirectionsNotes;
  if (props.directionsNotes) {
    formattedDirectionsNotes = props.directionsNotes;
  } else {
    formattedDirectionsNotes = [];
  }
  return (
    <div>
      <h3>Directions</h3>
      <ol>
        {props.directions.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ol>
      <h3>Notes</h3>
      <ul>
        {formattedDirectionsNotes.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ul>
    </div>
  );
}

DirectionsDisplay.propTypes = {
  directions: PropTypes.array,
  directionsNotes: PropTypes.array
}

export default DirectionsDisplay;
