import React from 'react';
import PropTypes from 'prop-types';

import DirectionsDisplay from './DirectionsDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import NavButton from '../Widgets/NavButton/NavButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRoute, changePopupStatus, removeRecipe } from '../../actions';

class RecipeDetail extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(changeRoute(false));
  };

  componentWillUnmount() {
    this.props.dispatch(changeRoute(false));
    this.props.dispatch(changePopupStatus(false));
  };

  handleClickDelete = () => {
    this.props.dispatch(removeRecipe(this.props.currentRecipe, this.props.user));
  };

  handleClickCancel = () => {
    const newPopup = !this.props.showPopup;
    this.props.dispatch(changePopupStatus(newPopup));
  };

  render(){
    return (
      <div>
        <div className='pageContentSection detailFlex'>
          <MainRecipeDisplay
            name = {this.props.recipes[this.props.currentRecipe].name}
            imageLink = {this.props.recipes[this.props.currentRecipe].imageLink}
            url = {this.props.recipes[this.props.currentRecipe].url}
          />
          <div className='directionDisplay'>
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
              <div className='popup-inner'>
                <h1>Are you sure you want to delete this recipe?</h1>
                <div className='popup-buttons'>
                  <div className='centerMe'>
                    <Link to='/'><button className='navButtonStyle button-red' onClick={this.handleClickDelete}>Delete</button>
                    </Link>
                  </div>
                  <div className='centerMe'>
                    <button onClick={this.handleClickCancel} className='navButtonStyle button-green'>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    loadedInitialState: state.loadedInitialState,
    recipes: state.recipes,
    showPopup: state.showPopup,
    user: state.user,
  };
};

RecipeDetail.propTypes = {
  currentRecipe: PropTypes.string,
  loadedInitialState: PropTypes.any,
  recipes: PropTypes.object,
  showPopup: PropTypes.bool,
  user: PropTypes.object,
}

export default connect(mapStateToProps)(RecipeDetail);
