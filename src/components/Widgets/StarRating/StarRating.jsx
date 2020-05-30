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
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange("rating", 5)} : null}>☆</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange("rating", 4)} : null}>☆</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange("rating", 3)} : null}>☆</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange("rating", 2)} : null}>☆</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange("rating", 1)} : null}>☆</span>
      </div>
    )
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func,
  rating: PropTypes.number,
}