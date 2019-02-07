import React, { Component } from 'react';
import NavButton from './Widgets/NavButton';
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

//turn array into display text
  readableArray = (array) => {
    if(array) {
      if(array.length === 0) {
        return;
      } else {
        return `- ${array.join('\n\n- ')}`;
      }
    }
  }

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

//checks for null prop values
  checkValue = (propValue) => {
    if(propValue) {
      return propValue;
    } else {
      return "";
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

    //on submission send added/edited recipe and route to said recipe
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
            defaultValue={this.checkValue(name)}
            id='name'
            ref={(input) => {this._name = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link:</label>
          <input
            type="text"
            defaultValue={this.checkValue(url)}
            id='url'
            ref={(input) => {this._url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture (link to picture):</label>
          <input
            type="text"
            defaultValue={this.checkValue(image)}
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
          <button type="submit" className='navButtonStyle button-green'>Submit</button>
        </div>
      </form>
      <NavButton
      linkPath='/recipe-detail'
      linkText='Cancel Changes'
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
    url: state.recipes[state.currentRecipeId].url,
    image: state.recipes[state.currentRecipeId].imageLink,
    name: state.recipes[state.currentRecipeId].name,
    ingredients: state.recipes[state.currentRecipeId].ingredients,
    ingredientsNotes: state.recipes[state.currentRecipeId].ingredientsNotes,
    directions: state.recipes[state.currentRecipeId].directions,
    directionsNotes: state.recipes[state.currentRecipeId].directionsNotes
  };
};

EditRecipeForm.propTypes = {
  currentRecipe: PropTypes.string,
  recipes: PropTypes.object,
  isRouting: PropTypes.boolean,
  url: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.array,
  ingredientsNotes: PropTypes.array,
  directions: PropTypes.array,
  directionsNotes: PropTypes.array
}

export default connect(mapStateToProps)(EditRecipeForm);
