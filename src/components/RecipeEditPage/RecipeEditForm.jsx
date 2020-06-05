import React, { Component } from 'react';
import NavButton from './../Widgets/NavButton/NavButton';
import StarRating from './../Widgets/StarRating/StarRating';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe, changeRoute } from './../../actions';
import { Redirect } from 'react-router';
import { v4 } from 'uuid';
import moment from 'moment';

class RecipeEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdRecipeId: null,
      rating: null
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

    if (this.props.currentRecipe && this.props.currentRecipe.rating && this.props.currentRecipe.rating !== this.state.rating) {
      this.setState({rating: this.props.currentRecipe.rating})
    }

    if (this.props.currentRecipe && this.props.currentRecipe.recipeStatus && this.props.currentRecipe.recipeStatus !== this.state.recipeStatus) {
      this.setState({recipeStatus: this.props.currentRecipe.recipeStatus})
    }
  }

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
      return "";
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

  handleChange = (stateCategory, newValue) => {
    console.log(`Changed ${stateCategory}`)
    this.setState({[stateCategory]: newValue})
  }

  render() {
    console.log(this.state)
    const {currentRecipe, currentRecipeName, dispatch, isRouting, recipes, user } = this.props;
    
    //format array props
    const formatIngredients = currentRecipe ? this.readableArray(currentRecipe.ingredients) : null;
    const formatIngredientsNotes = currentRecipe ? this.readableArray(currentRecipe.ingredientsNotes) : null;
    const formatDirections = currentRecipe ? this.readableArray(currentRecipe.directions) : null;
    const formatDirectionsNotes = currentRecipe ? this.readableArray(currentRecipe.directionsNotes) : null;

    //submit recipe to database and route to new recipe page
    const submitForm = (event) => {
      event.preventDefault();

      const recipeDetail = {
        createdDate: !currentRecipe ? moment()._d : currentRecipe.createdDate ? currentRecipe.createdDate : moment()._d,
        name: this._name.value,
        url: this._url.value,
        imageLink: this._imageLink.value,
        rating: this.state.rating,
        recipeStatus: this.state.recipeStatus,
        ingredients: this.createArray(this._ingredients.value),
        ingredientsNotes: this.createArray(this._ingredientsNotes.value),
        directions: this.createArray(this._directions.value),
        directionsNotes: this.createArray(this._directionsNotes.value)
      }

      const recipeId = currentRecipeName ? currentRecipeName : v4();

      if (!currentRecipe) {
        this.setState({createdRecipeId: recipeId});
      }

      if (recipes) {
        recipes[recipeId] = recipeDetail;
      } else {
        const newRecipeObject = {
          recipes: {}
        };
        newRecipeObject[recipeId] = recipeDetail;
        recipes.recipes = newRecipeObject;
      }
      dispatch(submitRecipe(recipes, user));
      dispatch(changeRoute(true));
    }
  
    //redirect on form submission
    if (isRouting === true && this.state.createdRecipeId) {
      return <Redirect to={`/recipe/${this.state.createdRecipeId}`} />
    } else if (isRouting === true && this.props.currentRecipe) {
      return <Redirect to={`/recipe/${this.props.currentRecipeName}`} />
    }

  console.log(this.props)
  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout'>
          <label>Recipe Name <span className={this.props.nameError ? 'errorMessage' : 'noErrorMessage'}>Please Enter a Name</span><span className={this.props.nameError ? 'noErrorMessage' : 'inputFieldNote'}>*  Required</span></label>
          <input
            required
            type="text"
            defaultValue={currentRecipe ? this.checkValue(currentRecipe.name) : null}
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
            defaultValue={currentRecipe ? this.checkValue(currentRecipe.url) : null}
            id='url'
            ref={(input) => {this._url = input;}}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture <span className='inputFieldNote'>(URL Only)</span></label>
          <input
            type="url"
            defaultValue={currentRecipe ? this.checkValue(currentRecipe.imageLink) : null}
            id='imageLink'
            ref={(input) => {this._imageLink = input;}}
          ></input>
        </div>
        <div className="ratingSection">
          <label>Rating</label>
          <StarRating 
            handleChange={this.handleChange}
            rating={this.state.rating}
            displayType={"write"}
          />
        </div>
        <div className='formInputLayout'>
          <label>Recipe Status:</label>
          <button onClick={() => {this.handleChange("recipeStatus", "completed")}} type="button">Completed</button>
          <button onClick={() => {this.handleChange("recipeStatus", "unfinished")}} type="button">Unfinished</button>
        </div>
        <div className='formInputLayout'>
          <label>Ingredients</label>
          <textarea
            id='ingredients'
            defaultValue={formatIngredients}
            ref={(input) => {this._ingredients = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Ingredient Notes</label>
          <textarea
            id='ingredientsNotes'
            defaultValue={formatIngredientsNotes}
            ref={(input) => {this._ingredientsNotes = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Directions</label>
          <textarea
            id='directions'
            defaultValue={formatDirections}
            ref={(input) => {this._directions = input;}}
          ></textarea>
        </div>
        <div className='formInputLayout'>
          <label>Direction Notes</label>
          <textarea
            id='directionsNotes'
            defaultValue={formatDirectionsNotes}
            ref={(input) => {this._directionsNotes = input;}}
          ></textarea>
        </div>
        <div className='centerMe'>
          <button type="submit" className='navButtonStyle button-green'>Submit</button>
        </div>
      </form>
      { !currentRecipe && (
        <NavButton
        linkPath='/'
        linkText='Cancel'
        color='red'
        />
      )}
      { currentRecipe && (
        <NavButton
        linkPath={`/recipe/${currentRecipeName}`}
        linkText='Cancel Changes'
        color='red'
        />
      )}
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    isRouting: state.isRouting,
    recipes: state.recipes,
    user: state.user,
  };
};

RecipeEditForm.propTypes = {
  currentRecipe: PropTypes.object,
  recipes: PropTypes.object,
  isRouting: PropTypes.bool,
  user: PropTypes.object,

  directions: PropTypes.array,
  directionsNotes: PropTypes.array,
  image: PropTypes.string,
  ingredients: PropTypes.array,
  ingredientsNotes: PropTypes.array,
  name: PropTypes.string,
  url: PropTypes.string,
}

export default connect(mapStateToProps)(RecipeEditForm);