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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class RecipeEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdRecipeId: null,
      _name: '',
      _url: '',
      _imageLink: '',
      _author: '',
      _rating: '',
      _recipeStatus: 'unfinished',
      _ingredients: '',
      _ingredientsNotes: '',
      _directions: '',
      _directionsNotes: ''
    }
  }

//validate inputs on load
  componentDidMount() {
    const {currentRecipe } = this.props;

    //set default input values
    this.setState({
      _name: currentRecipe && currentRecipe.name ? currentRecipe.name : '',
      _url: currentRecipe && currentRecipe.url ? currentRecipe.url : '',
      _imageLink: currentRecipe && currentRecipe.imageLink ? currentRecipe.imageLink : '',
      _author: currentRecipe && currentRecipe.author ? currentRecipe.author : '',
      _rating: currentRecipe && currentRecipe.rating && currentRecipe.rating !== this.state.rating ? currentRecipe.rating : '',
      _recipeStatus: currentRecipe && currentRecipe.recipeStatus && currentRecipe.recipeStatus !== this.state._recipeStatus ? currentRecipe.recipeStatus : "unfinished",
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

  handleRatingChange = (newValue) => {
    this.setState({_rating: newValue})
  }

  handleTextChange = (event) => {
    if (event.target.id) {
      this.setState({[event.target.id]: event.target.value})
    } else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  render() {
    const {currentRecipe, currentRecipeName, dispatch, isRouting, recipes, user } = this.props;

    const submitForm = (event) => {
      event.preventDefault();
      const recipeDetail = {
        createdDate: !currentRecipe ? moment()._d : currentRecipe.createdDate ? currentRecipe.createdDate : moment()._d,
        name: this.state._name,
        url: this.state._url,
        imageLink: this.state._imageLink,
        author: this.state._author,
        rating: this.state._rating,
        recipeStatus: this.state._recipeStatus,
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

  console.log(this.state)
  return (
    <div>
      <form className='formLayout' onSubmit={submitForm.bind(this)}>
        <div className='formInputLayout inputSmall'>
          <TextField
            required
            id='_name'
            value={this.state._name}
            label="Recipe Name"
            onChange={this.handleTextChange}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout inputSmall'>
          <TextField
            id='_url'
            value={this.state._url}
            label="Recipe Link (URL Only)"
            onChange={this.handleTextChange}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_imageLink'
            value={this.state._imageLink}
            label="Recipe Picture (URL Only)"
            onChange={this.handleTextChange}
            variant="outlined"
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id="_author"
            value={this.state._author}
            label="Recipe Author"
            onChange={this.handleTextChange}
            variant="outlined"
          />
        </div>
        <div className="ratingSection">
          <label>Rating</label>
          <StarRating 
            handleChange={this.handleRatingChange}
            name='_rating'
            rating={this.state._rating}
            displayType={"write"}
          />
        </div>
        <div className='formInputLayout'>
          <FormControl component="fieldset">
            <FormLabel component="legend">Recipe Status</FormLabel>
            <RadioGroup aria-label="Recipe Status" name='_recipeStatus' value={this.state._recipeStatus} onChange={this.handleTextChange}>
              <FormControlLabel value="completed" control={<Radio />} label="Completed" />
              <FormControlLabel value="unfinished" control={<Radio />} label="Not Made" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_ingredients'
            defaultValue={this.state._ingredients}
            label="Ingredients"
            onChange={this.handleTextChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_ingredientsNotes'
            defaultValue={this.state._ingredientsNotes}
            label="Ingredient Notes"
            onChange={this.handleTextChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_directions'
            defaultValue={this.state._directions}
            label="Directions"
            onChange={this.handleTextChange}
            variant="outlined"
            multiline
            rows={4}
          />
        </div>
        <div className='formInputLayout'>
          <TextField
            id='_directionsNotes'
            defaultValue={this.state._directionsNotes}
            label="Direction Notes"
            onChange={this.handleTextChange}
            variant="outlined"
            multiline
            rows={4}
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