import React from 'react';
import PropTypes from 'prop-types';

import DirectionsDisplay from './DirectionsDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import NavBarBacksplash from '../NavBar/NavBarBacksplash';
import NavButton from '../Widgets/NavButton/NavButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRoute, changePopupStatus, removeRecipe } from '../../actions';

class RecipeDetail extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(changeRoute(false));
  };

  //Reset rerouting & popup if page is left
  componentWillUnmount() {
    this.props.dispatch(changeRoute(false));
    this.props.dispatch(changePopupStatus(false));
  };

  //delete recipe from popup
  handleClickDelete = (currentRecipe) => {
    this.props.dispatch(removeRecipe(currentRecipe, this.props.user));
  };

  //close popup from popup
  handleClickCancel = () => {
    const newPopup = !this.props.showPopup;
    this.props.dispatch(changePopupStatus(newPopup));
  };

  render(){
    const {recipes, showPopup } = this.props;
    const currentRecipe = this.props.location.pathname.slice(8);

    return (
      <div className='contentContainer'>
      <NavBarBacksplash />
        <div className='pageContentSection detailFlex'>
          <MainRecipeDisplay
            createdDate = {recipes[currentRecipe].createdDate}
            currentRecipe = {currentRecipe}
            imageLink = {recipes[currentRecipe].imageLink}
            name = {recipes[currentRecipe].name}
            url = {recipes[currentRecipe].url}
          />
          <div className='directionDisplay'>
          {(!recipes[currentRecipe].ingredients && !recipes[currentRecipe].ingredientsNotes && !recipes[currentRecipe].directions && !recipes[currentRecipe].directionsNotes) && (
            <div className='emptyContentMessage'>
              <h2>There's nothing here!</h2>
              <p>Select <Link to={`/edit-recipe/`}>Edit Recipe</Link> to add ingredients, directions, and notes</p>
            </div>
          )}
            <IngredientsDisplay
              ingredients = {recipes[currentRecipe].ingredients}
              ingredientsNotes = {recipes[currentRecipe].ingredientsNotes}
            />
            <DirectionsDisplay
              directions = {recipes[currentRecipe].directions}
              directionsNotes = {recipes[currentRecipe].directionsNotes}
            />
          </div>
          <NavButton
            linkPath='/'
            linkText='Go Back'
          />
          {showPopup ?
            <div className='popup'>
              <div className='popup-inner'>
                <h1>Are you sure you want to delete this recipe?</h1>
                <div className='popup-buttons'>
                  <div className='centerMe'>
                    <Link to='/'><button className='navButtonStyle button-red' onClick={() => {this.handleClickDelete(currentRecipe);}}>Delete</button>
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
    recipes: state.recipes,
    showPopup: state.showPopup,
    user: state.user,
  };
};

RecipeDetail.propTypes = {
  currentRecipe: PropTypes.string,
  recipes: PropTypes.object,
  showPopup: PropTypes.bool,
  user: PropTypes.object,
}

export default connect(mapStateToProps)(RecipeDetail);
