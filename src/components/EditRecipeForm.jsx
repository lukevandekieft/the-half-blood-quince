import React, { Component } from 'react';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe, changeRoute } from './../actions';
import { Redirect } from 'react-router';

class EditRecipeForm extends Component {

  _name = null;
  _url = null;
  _imageLink = null;
  _ingredients = null;
  _ingredientsNotes = null;
  _directions = null;
  _directionsNotes = null;

  readableArray = (array) => {
    if(array) {
      return `- ${array.join('\n\n- ')}`;
    } else {
      return [];
    }
  }
  createArray = (string) => {
    if(string) {
      string = `\n\n${string}`;
      let newArray = string.split('\n\n- ');
      newArray.shift();
      return newArray;
    } else {
      return [];
    }
  }

  render() {
    //destructure props from mapStateToProps
    const {currentRecipe, recipes, name, url, image, ingredients, ingredientsNotes, directions, directionsNotes, isRouting, dispatch} = this.props;

    //format array props
    const formatIngredients = this.readableArray(ingredients);
    const formatIngredientsNotes = this.readableArray(ingredientsNotes);
    const formatDirections = this.readableArray(directions);
    const formatDirectionsNotes = this.readableArray(directionsNotes);

    console.log(this.props)

    const submitForm = (event) => {
      event.preventDefault();
      recipes[currentRecipe] = {
        name: this._name.value,
        url: this._url.value,
        imageLink: this._imageLink.value,
        ingredients: this.createArray(this._ingredients.value),
        ingredientsNotes: this.createArray(this._ingredientsNotes.value),
        directions: this.createArray(this._directions.value),
        directionsNotes: this.createArray(this._directionsNotes.value)
      }
      dispatch(submitRecipe(recipes));
      dispatch(changeRoute(true));
    }
    if (isRouting == true) {
      return <Redirect to='/recipe-detail' />
    }
  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout'>
          <label>Recipe Name:</label>
          <input
            type="text"
            defaultValue={name}
            id='name'
            ref={(input) => {this._name = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link:</label>
          <input
            type="text"
            defaultValue={url}
            id='url'
            ref={(input) => {this._url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture (link to picture):</label>
          <input
            type="text"
            defaultValue={image}
            id='imageLink'
            ref={(input) => {this._imageLink = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients:</label>
          <textarea
            defaultValue={formatIngredients}
            id='ingredients'
            ref={(input) => {this._ingredients = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes:</label>
          <textarea
            defaultValue={formatIngredientsNotes}
            id='ingredientsNotes'
            ref={(input) => {this._ingredientsNotes = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions:</label>
          <textarea
            defaultValue={formatDirections}
            id='directions'
            ref={(input) => {this._directions = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes:</label>
          <textarea
            defaultValue={formatDirectionsNotes}
            id='directionsNotes'
            ref={(input) => {this._directionsNotes = input;}}
          ></textarea>
        </div>
        <div className='centerMe'>
          <button type="submit" className='navButtonStyle'>Submit</button>
        </div>
      </form>
      <NavButton
      linkPath='/'
      linkText='Cancel Changes'
      />
    </div>
  )};
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    recipes: state.recipes,
    isRouting: state.isRouting,
    url: state.recipes[state.currentRecipeId].url,
    image: state.recipes[state.currentRecipeId].imageLink,
    name: state.recipes[state.currentRecipeId].name,
    ingredients: state.recipes[state.currentRecipeId].ingredients,
    ingredientsNotes: state.recipes[state.currentRecipeId].ingredientsNotes,
    directions: state.recipes[state.currentRecipeId].directions,
    directionsNotes: state.recipes[state.currentRecipeId].directionsNotes
  };
};

export default connect(mapStateToProps)(EditRecipeForm);
