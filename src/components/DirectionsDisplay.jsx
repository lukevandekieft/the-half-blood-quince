import React from 'react';
import PropTypes from 'prop-types';

function DirectionsDisplay(props){
  return (
    <div>
      <h3>Directions</h3>
      <ol>
      {props.directions.map(index => {
        return <li key={index}>{index}</li>
      })}
      </ol>
      <h3>Notes</h3>
      <ul>
      {props.directionsNotes.map(index => {
        return <li key={index}>{index}</li>
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
