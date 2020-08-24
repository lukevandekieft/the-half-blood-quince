import React, { Component } from 'react';
import NavButton from './../Widgets/NavButton/NavButton';
import StarRating from './../Widgets/StarRating/StarRating';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe, changeRoute } from './../../actions';
import { Redirect } from 'react-router';
import { v4 } from 'uuid';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class RecipeEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdRecipeId: null,
      rating: null,
      recipeStatus: "unfinished",
      _name: '',
      _url: '',
      _imageLink: '',
      _author: '',
      _ingredients: '',
      _ingredientsNotes: '',
      _directions: '',
      _directionsNotes: ''
    }
  }

//validate inputs on load
  componentDidMount() {
    const {currentRecipe, currentRecipeName, dispatch, isRouting, recipes, user } = this.props;

    if (currentRecipe && currentRecipe.rating && currentRecipe.rating !== this.state.rating) {
      this.setState({rating: currentRecipe.rating})
    }
    if (currentRecipe && currentRecipe.recipeStatus && currentRecipe.recipeStatus !== this.state.recipeStatus) {
      this.setState({recipeStatus: currentRecipe.recipeStatus})
    }

    //set default input values
    this.setState({
      _name: currentRecipe && currentRecipe.name ? currentRecipe.name : '',
      _url: currentRecipe && currentRecipe.url ? currentRecipe.url : '',
      _imageLink: currentRecipe && currentRecipe.imageLink ? this._imageLink = currentRecipe.imageLink : '',
      _author: currentRecipe && currentRecipe.author ? this._author = currentRecipe.author : '',
      _ingredients: currentRecipe ? this.readableArray(currentRecipe.ingredients) : '',
      _ingredientsNotes: currentRecipe ? this.readableArray(currentRecipe.ingredientsNotes) : '',
      _directions: currentRecipe ? this.readableArray(currentRecipe.directions) : '',
      _directionsNotes: currentRecipe ? this.readableArray(currentRecipe.directionsNotes) : ''
    });
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

  handleRadioChange = (stateCategory, newValue) => {
    this.setState({[stateCategory]: newValue})
  }

  handleTextChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  render() {
    const {currentRecipe, currentRecipeName, dispatch, isRouting, recipes, user } = this.props;

    console.log(this.state);

    const submitForm = (event) => {
      event.preventDefault();
      const recipeDetail = {
        author: this.state._author,
        createdDate: !currentRecipe ? moment()._d : currentRecipe.createdDate ? currentRecipe.createdDate : moment()._d,
        name: this.state._name,
        url: this.state._url,
        imageLink: this.state._imageLink,
        rating: this.state.rating,
        recipeStatus: this.state.recipeStatus,
        ingredients: this.createArray(this.state._ingredients),
        ingredientsNotes: this.createArray(this.state._ingredientsNotes),
        directions: this.createArray(this.state._directions),
        directionsNotes: this.createArray(this.state._directionsNotes)
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

  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout'>
          <label>Recipe Name <span className={this.props.nameError ? 'errorMessage' : 'noErrorMessage'}>Please Enter a Name</span><span className={this.props.nameError ? 'noErrorMessage' : 'inputFieldNote'}>*  Required</span></label>
          <input
            required
            type="text"
            defaultValue={this.state._name}
            id='_name'
            className={this.props.nameError ? "inputError" : ""}
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Link <span className='inputFieldNote'>(URL Only)</span></label>
          <input
            type="url"
            defaultValue={this.state._url}
            id='_url'
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Picture <span className='inputFieldNote'>(URL Only)</span></label>
          <input
            type="url"
            defaultValue={this.state._imageLink}
            id='_imageLink'
          ></input>
        </div>
        <div className='formInputLayout'>
          <label>Recipe Author</label>
          <input
            type="text"
            defaultValue={this.state._author}
            id='_author'
          ></input>
        </div>
        <div className="ratingSection">
          <label>Rating</label>
          <StarRating 
            handleRadioChange={this.handleRadioChange}
            rating={this.state.rating}
            displayType={"write"}
          />
        </div>
        <div className='formInputLayout'>
          <label>Recipe Status:</label>
          <button onClick={() => {this.handleRadioChange("recipeStatus", "completed")}} type="button">Completed</button>
          <button onClick={() => {this.handleRadioChange("recipeStatus", "unfinished")}} type="button">Unfinished</button>
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_ingredients'
            defaultValue={this.state._ingredients}
            label="Ingredients"
            onChange={this.handleTextChange}
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_ingredientsNotes'
            defaultValue={this.state._ingredientsNotes}
            label="Ingredient Notes"
            onChange={this.handleTextChange}
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_directions'
            defaultValue={this.state._directions}
            label="Directions"
            onChange={this.handleTextChange}
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_directionsNotes'
            defaultValue={this.state._directionsNotes}
            label="Direction Notes"
            onChange={this.handleTextChange}
            multiline
            rows={4}
            variant="outlined"
          />
        </div>
        <div className='centerMe'>
          <Button type="submit" className='navButtonStyle button-green' variant="contained">Submit</Button>
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