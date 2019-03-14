import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, submitRecipe } from '../../actions';
import { withRouter } from 'react-router-dom';

import NavButton from '../Widgets/NavButton/NavButton';

class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeModalOpen: false,
    }
  }

  render() {
    const {dispatch, ingredients, image, location, name, recipes, url, user, valueKey} = this.props;
    //Change currentRecipe to clicked item
    const handleClick = (key) => {
      dispatch(changeCurrentRecipe(key, user));
    };

    //set background based on props
    const backgroundImage = {
      backgroundImage: `url(${image})`
    };

    //add recipe from popup
    const handleAddSearchRecipe = () => {
      dispatch(changeCurrentRecipe(valueKey, user));
      const newRecipeInfo = {
        name: name,
        url: url,
        imageLink: image,
        ingredients: ingredients,
      }
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
    }

    //close popup from popup
    const handleClickCancel = () => {
      this.setState(({ recipeModalOpen }) => ({ recipeModalOpen: !recipeModalOpen }));
    };

    return (
      <React.Fragment>
        <div className='recipeItemBox' onClick={() => {handleClickCancel()}}>
          <a>
            <h3>{name}</h3>
            <div className='recipeItemImageContainer'>
              <div className='imagePlaceholder'>
              </div>
              <div className='recipeImage' style={backgroundImage}>
              </div>
            </div>
          </a>
        </div>
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
                  <a href={url}><button className='navButtonStyle button-green'>Visit Recipe Site</button>
                  </a>
                </div>
                <div onClick={() => {handleAddSearchRecipe()}}>
                  <NavButton
                    linkPath='/recipe-detail'
                    linkText='Add to My Recipes'
                  />
                </div>
                <div className='centerMe'>
                  <button onClick={() => {handleClickCancel()}} className='navButtonStyle button-red'>Go Back</button>
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
  keypair: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.object,
  valueKey: PropTypes.string
};

export default withRouter(connect(mapStateToProps)(RecipeItem));
