import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StarRating extends Component {

//validate inputs on load
  componentDidMount() {
    if (this.props.rating) {
      this.setState({rating: this.props.rating})
    }
  }

  render() {
    return (
      <div className={this.props.rating ? `ratingBox rate-${this.props.rating}-star` : "ratingBox"}>
        {/* NOTE: spans are reversed in CSS! 1=5, 5=1 */}
        <span onClick={() => {this.props.handleChange("rating", 5)}}>☆</span>
        <span onClick={() => {this.props.handleChange("rating", 4)}}>☆</span>
        <span onClick={() => {this.props.handleChange("rating", 3)}}>☆</span>
        <span onClick={() => {this.props.handleChange("rating", 2)}}>☆</span>
        <span onClick={() => {this.props.handleChange("rating", 1)}}>☆</span>
      </div>
    )
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func,
  rating: PropTypes.number,
}