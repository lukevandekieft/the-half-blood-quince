import React from 'react';
import PropTypes from 'prop-types';
import NavButton from '../Widgets/NavButton';
import { connect } from 'react-redux';
import { changePopupStatus } from '../../actions';

function MainRecipeDisplay({name, url, imageLink, currentRecipe, showPopup, dispatch}){
  const altText = `${name} Recipe`
  const backgroundImage = {
    backgroundImage: `url(${imageLink})`
  };

  const handleClick = () => {
    dispatch(changePopupStatus(!showPopup));
  };

  return (
    <div className='mainRecipeContainer'>
      <div className='recipeDetailPicture' style={backgroundImage} alt={altText}></div>

      <div className='mainDetailContainer'>
      <h1 className='centerMe'>{name}</h1>
        <div>
          <div className='centerMe'>
            <button className='navButtonStyle button-green'><a className='linkStyle' href={url}>Link to Page</a></button>
          </div>
          <NavButton
            linkPath='/edit-recipe'
            linkText='Edit Recipe'
          />
          <div className='centerMe' onClick={() => {handleClick()}}>
            <button className='navButtonStyle button-red'>Delete Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    showPopup: state.showPopup
  };
};

MainRecipeDisplay.propTypes = {
  name: PropTypes.string,
  imageLink: PropTypes.string,
  url: PropTypes.string
}

export default connect(mapStateToProps)(MainRecipeDisplay);
