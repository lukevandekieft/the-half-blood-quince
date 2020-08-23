import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitRecipe } from '../../actions';
import { Redirect } from 'react-router';
import moment from 'moment';
import Button from '@material-ui/core/Button';

import NavButton from '../Widgets/NavButton/NavButton';
import RecipeItem from '../HomePage/RecipeItem';

class RecipeSearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeModalOpen: false,
      recipeSaved: false,
    };
  }

  render() {
    const {dispatch, ingredients, image, name, recipes, url, user, valueKey} = this.props;

    //set background based on props
    const backgroundImage = {
      backgroundImage: `url(${image})`
    };

    //add recipe from popup
    const handleAddSearchRecipe = () => {
      const newRecipeInfo = {
        createdDate: moment()._d,
        imageLink: image,
        ingredients: ingredients,
        name: name,
        url: url
      };
      let newRecipeList;
      if (recipes) {
        recipes[valueKey] = newRecipeInfo;
        newRecipeList = recipes;
      } else {
        const newRecipeObject = {
          recipes: {}
        };
        newRecipeObject[valueKey] = newRecipeInfo;
        newRecipeList = newRecipeObject;
      }
      dispatch(submitRecipe(newRecipeList, user));
      this.setState(({ recipeSaved }) => ({ recipeSaved: true }));
    };

    //close popup from itself
    const handleClickCancel = () => {
      this.setState(({ recipeModalOpen }) => ({ recipeModalOpen: !recipeModalOpen }));
    };

    //redirect on recipe Add
    if (this.state.recipeSaved === true) {
      return <Redirect to={`/recipe/${valueKey}`} />
    }

    return (
      <React.Fragment>
        <a className="clickEvent" onClick={() => {handleClickCancel();}} key = {valueKey}>
          <RecipeItem
            name = {name}
            image = {image}
          />
        </a>
        {this.state.recipeModalOpen ?
          <div className='popup'>
            <div className='popup-inner discoverPage'>
              <h2>{name}</h2>
              <div className='recipeItemImageContainer'>
                <div className='imagePlaceholder'>
                </div>
                <div className='recipeImage' style={backgroundImage}>
                </div>
              </div>
              <div className='popup-buttons'>
                <div className='centerMe'>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button className='navButtonStyle button-green' variant="contained">Visit Recipe Site</Button>
                  </a>
                </div>
                <Button onClick={() => {handleAddSearchRecipe();}} className='navButtonStyle button-green' variant="contained">Add to My Recipes</Button>
                <div className='centerMe'>
                  <Button onClick={() => {handleClickCancel();}} className='navButtonStyle button-red' variant="contained">Go Back</Button>
                </div>
              </div>
            </div>
          </div>
          : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
  };
};

RecipeItem.propTypes = {
  image: PropTypes.string,
  ingredients: PropTypes.array,
  keypair: PropTypes.string,
  name: PropTypes.string,
  recipes: PropTypes.any,
  url: PropTypes.string,
  user: PropTypes.object,
  valueKey: PropTypes.string
};

export default connect(mapStateToProps)(RecipeSearchItem);
