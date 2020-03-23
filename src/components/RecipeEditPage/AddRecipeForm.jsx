import React, { Component } from 'react';
import NavButton from './../Widgets/NavButton/NavButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe, changeRoute } from './../../actions';
import { Redirect } from 'react-router';
import { v4 } from 'uuid';
import moment from 'moment';

class AddRecipeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdRecipeId: null
    }
  }

  _name = null;
  _url = null;
  _imageLink = null;
  _ingredients = null;
  _ingredientsNotes = null;
  _directions = null;
  _directionsNotes = null;

//validate inputs on load
  componentDidMount() {
    this.props.onInputValidation(this._name);
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

  render() {
    const {dispatch, isRouting, recipes, user } = this.props;
    console.log(this.props);
    //submit recipe to database and route to new recipe page
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
        directionsNotes: this.createArray(this._directionsNotes.value),
        createdDate: moment()._d
      }
      const newRecipeId = v4()
      this.setState({createdRecipeId: newRecipeId});
      if (recipes) {
        recipes[newRecipeId] = newRecipeInfo;
        newRecipeList = recipes;
      } else {
        const newRecipeObject = {
          recipes: {}
        };
        newRecipeObject[newRecipeId] = newRecipeInfo;
        newRecipeList = newRecipeObject;
      }
      dispatch(submitRecipe(newRecipeList, user));
      dispatch(changeRoute(true));
    }

  
    //redirect on form submission
    if (isRouting === true && this.state.createdRecipeId) {
      return <Redirect to={`/recipe/${this.state.createdRecipeId}`} />
    }

  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout'>
          <label>Recipe Name <span className={this.props.nameError ? 'errorMessage' : 'noErrorMessage'}>Please Enter a Name</span><span className={this.props.nameError ? 'noErrorMessage' : 'inputFieldNote'}>*  Required</span></label>
          <input
            type="text"
            id='name'
            ref={(input) => {this._name = input;}}
            className={this.props.nameError ? "inputError" : ""}
            onChange={() => {this.props.onInputValidation(this._name)}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link <span className='inputFieldNote'>(URL Only)</span></label>
          <input
            type="url"
            id='url'
            ref={(input) => {this._url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture <span className='inputFieldNote'>(URL Only)</span></label>
          <input
            type="url"
            id='imageLink'
            ref={(input) => {this._imageLink = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients</label>
          <textarea
            id='ingredients'
            ref={(input) => {this._ingredients = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes</label>
          <textarea
            id='ingredientsNotes'
            ref={(input) => {this._ingredientsNotes = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions</label>
          <textarea
            id='directions'
            ref={(input) => {this._directions = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes</label>
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
    isRouting: state.isRouting,
    recipes: state.recipes,
    user: state.user,
  };
};

AddRecipeForm.propTypes = {
  recipes: PropTypes.object,
  isRouting: PropTypes.bool,
  user: PropTypes.object,
}

export default connect(mapStateToProps)(AddRecipeForm);
