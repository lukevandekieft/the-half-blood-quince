import React, { Component } from 'react';
import NavButton from './../Widgets/NavButton/NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe, changeRoute } from './../../actions';
import { Redirect } from 'react-router';

class AddRecipeForm extends Component {

  _name = null;
  _url = null;
  _imageLink = null;
  _ingredients = null;
  _ingredientsNotes = null;
  _directions = null;
  _directionsNotes = null;

//turn display text into array
  createArray = (string) => {
    if(string) {
      string = `\n\n${string}`;
      let newArray = string.split(/\n+-*\s*/i);
      newArray.shift();
      return newArray;
    } else {
      return [];
    }
  }

  render() {
    //destructure props from mapStateToProps
    const {currentRecipe, dispatch, isRouting, recipes, user } = this.props;

    //on submission send added/edited recipe and route to said recipe
    const submitForm = (event) => {
      event.preventDefault();
      let newRecipeList;
      let newRecipeInfo = {
        name: this._name.value,
        url: this._url.value,
        imageLink: this._imageLink.value,
        ingredients: this.createArray(this._ingredients.value),
        ingredientsNotes: this.createArray(this._ingredientsNotes.value),
        directions: this.createArray(this._directions.value),
        directionsNotes: this.createArray(this._directionsNotes.value)
      }
      if (recipes) {
        recipes[currentRecipe] = newRecipeInfo;
        newRecipeList = recipes;
      } else {
        const newRecipeObject = {
          recipes: {}
        };
        newRecipeObject[currentRecipe] = newRecipeInfo;
        newRecipeList = newRecipeObject;
      }
      dispatch(submitRecipe(newRecipeList, user));
      dispatch(changeRoute(true));
    }

    if (isRouting === true) {
      return <Redirect to='/recipe-detail' />
    }
  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout'>
          <label>Recipe Name:</label>
          <input
            type="text"
            id='name'
            ref={(input) => {this._name = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link:</label>
          <input
            type="text"
            id='url'
            ref={(input) => {this._url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture (link to picture):</label>
          <input
            type="text"
            id='imageLink'
            ref={(input) => {this._imageLink = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients:</label>
          <textarea
            id='ingredients'
            ref={(input) => {this._ingredients = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes:</label>
          <textarea
            id='ingredientsNotes'
            ref={(input) => {this._ingredientsNotes = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions:</label>
          <textarea
            id='directions'
            ref={(input) => {this._directions = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes:</label>
          <textarea
            id='directionsNotes'
            ref={(input) => {this._directionsNotes = input;}}
          ></textarea>
        </div>
        <div className='centerMe'>
          <button type="submit" className='navButtonStyle button-green'>Submit</button>
        </div>
      </form>
      <NavButton
      linkPath='/'
      linkText='Cancel'
      color='red'
      />
    </div>
  )};
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    recipes: state.recipes,
    isRouting: state.isRouting,
    user: state.user,
  };
};

AddRecipeForm.propTypes = {
  currentRecipe: PropTypes.string,
  recipes: PropTypes.object,
  isRouting: PropTypes.boolean,
  user: PropTypes.object,
}

export default connect(mapStateToProps)(AddRecipeForm);
