import React from 'react';
import PropTypes from 'prop-types';

function DirectionsDisplay(props){

//Format Display Text
  let headerSection;
  if (props.directionsNotes) {
    headerSection =
      <React.Fragment>
        <h3>Directions Notes</h3>
        <ul>
          {props.directionsNotes.map(index => {
            return <li key={index} className="recipeDetailList">{index}</li>;
          })}
        </ul>
      </React.Fragment>;
  } else {
    headerSection = null;
  }

  let formattedDirections;
  if (props.directions) {
    formattedDirections =
    <React.Fragment>
      <h3>Directions</h3>
      <ol>
        {props.directions.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>;
        })}
      </ol>
    </React.Fragment>;
  } else {
    formattedDirections = null;
  }

  return (
    <div>
      {formattedDirections}
      {headerSection}
    </div>
  );
}

DirectionsDisplay.propTypes = {
  directions: PropTypes.array,
  directionsNotes: PropTypes.array
};

export default DirectionsDisplay;
