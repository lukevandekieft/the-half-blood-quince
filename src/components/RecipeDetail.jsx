import React from 'react';
import PropTypes from 'prop-types';

import MainRecipeDisplay from './MainRecipeDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import DirectionsDisplay from './DirectionsDisplay';
import NavButton from './NavButton';

class RecipeDetail extends React.Component{

  constructor(props) {
    super(props);
  }

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
  };

  render(){
    const currentRecipe = this.props.currentRecipe;
    let domDisplay;
    if (currentRecipe) {
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
        <NavButton />
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
