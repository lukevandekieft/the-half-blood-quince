import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import FormLabel from '@material-ui/core/FormLabel';

export default class StarRating extends Component {

//validate inputs on load
  componentDidMount() {
    if (this.props.rating) {
      this.setState({rating: this.props.rating})
    }
  }

  render() {
    return (
        <div className="starBox">
          <FormLabel component="legend">Rating</FormLabel>
          <Rating
            name="simple-controlled"
            value={this.props.rating}
            onChange={(event, newValue) => {
              if (newValue) {
                this.props.handleChange(newValue);
              }
            }}
          />
      </div>
    )
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func,
  rating: PropTypes.number,
}