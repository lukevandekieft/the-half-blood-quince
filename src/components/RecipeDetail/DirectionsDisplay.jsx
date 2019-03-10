import React from 'react';
import PropTypes from 'prop-types';

function DirectionsDisplay(props){

//Format Display Text
  let headerSection = null;
  let formattedDirectionsNotes;
  if (props.directionsNotes) {
    formattedDirectionsNotes = props.directionsNotes;
    headerSection =
      <React.Fragment>
        <h3>Directions Notes</h3>
        <ul>
          {formattedDirectionsNotes.map(index => {
            return <li key={index} className="recipeDetailList">{index}</li>;
          })}
        </ul>
      </React.Fragment>;
  } else {
    formattedDirectionsNotes = null;
  }

  let formattedDirections;
  if (props.directions) {
    formattedDirections = props.directions;
  } else {
    formattedDirections = [];
  }

  return (
    <div>
      <h3>Directions</h3>
      <ol>
        {formattedDirections.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>;
        })}
      </ol>
      {headerSection}
    </div>
  );
}

DirectionsDisplay.propTypes = {
  directions: PropTypes.array,
  directionsNotes: PropTypes.array
};

export default DirectionsDisplay;
