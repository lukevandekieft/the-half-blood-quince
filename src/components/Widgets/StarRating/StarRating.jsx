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
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange(1)} : null}>★</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange(2)} : null}>★</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange(3)} : null}>★</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange(4)} : null}>★</span>
        <span className={this.props.displayType === "write" ? "clickEvent" : null} onClick={this.props.displayType === "write" ? () => {this.props.handleChange(5)} : null}>★</span>
      </div>
    )
  }
}

StarRating.propTypes = {
  handleChange: PropTypes.func,
  rating: PropTypes.number,
}