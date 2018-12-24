import React from 'react';
import PropTypes from 'prop-types';

import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import DirectionsDisplay from './DirectionsDisplay';
import NavButton from './NavButton';
import { changeRoute, changePopupStatus, removeRecipe } from './../actions';

class RecipeDetail extends React.Component{

  detailStyles = {
    display: 'flex',
    flexDirection: 'column'
  };
  directionDisplayStyles = {
    display: 'grid',
    gridTemplate: 'auto / 1.3fr 3fr',
    gridColumnGap: '50px'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(changeRoute(false));
  };

  componentWillUnmount() {
    this.props.dispatch(changeRoute(false));
    this.props.dispatch(changePopupStatus(false));
  };

  handleClickDelete = () => {
    this.props.dispatch(removeRecipe(this.props.currentRecipe));
  };

  handleClickCancel = () => {
    const newPopup = !this.props.showPopup;
    this.props.dispatch(changePopupStatus(newPopup));
  };

  render(){
    let domDisplay;
    if (this.props.loadedInitialState) {
      domDisplay =
      <div className='pageContentSection' style={this.detailStyles}>
        <MainRecipeDisplay
          name = {this.props.recipes[this.props.currentRecipe].name}
          imageLink = {this.props.recipes[this.props.currentRecipe].imageLink}
          url = {this.props.recipes[this.props.currentRecipe].url}
        />
        <div style={this.directionDisplayStyles}>
          <IngredientsDisplay
            ingredients = {this.props.recipes[this.props.currentRecipe].ingredients}
            ingredientsNotes = {this.props.recipes[this.props.currentRecipe].ingredientsNotes}
          />
          <DirectionsDisplay
            directions = {this.props.recipes[this.props.currentRecipe].directions}
            directionsNotes = {this.props.recipes[this.props.currentRecipe].directionsNotes}
          />
        </div>
        <NavButton
          linkPath='/'
          linkText='Go Back'
        />
        {this.props.showPopup ?
          <div className='popup'>
            <div className='popup_inner'>
              <h1>Are you sure you want to delete this recipe?</h1>
            <button onClick={this.handleClickCancel}>Cancel</button>
            <div onClick={this.handleClickDelete}>
              <NavButton
                linkPath='/'
                linkText='Delete'
              />
            </div>
            </div>
          </div>
          : null
        }
      </div>
    } else {
      domDisplay =
      <div className='loading'>
        <div className='loader'></div>
      </div>
    }
    return (
      <div>
        {domDisplay}
      </div>
    );
  }
}

RecipeDetail.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default RecipeDetail;
