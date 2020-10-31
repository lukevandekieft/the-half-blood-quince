import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default class StarRating extends Component {

//validate inputs on load
  componentDidMount() {
    if (this.props.rating) {
      this.setState({rating: this.props.rating})
    }
  }

  render() {
    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={this.props.rating}
          onChange={(event, newValue) => {
            if (newValue) {
              this.props.handleChange(newValue);
            }
          }}
        />
      </Box>
    )
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func,
  rating: PropTypes.number,
}