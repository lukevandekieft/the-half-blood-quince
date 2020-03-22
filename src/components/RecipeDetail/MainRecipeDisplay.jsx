import React from 'react';
import PropTypes from 'prop-types';
import NavButton from '../Widgets/NavButton/NavButton';
import { connect } from 'react-redux';
import { changePopupStatus } from '../../actions';
import moment from 'moment';

function MainRecipeDisplay({createdDate, currentRecipe, dispatch, imageLink, name, showPopup, url}){
  const altText = `${name} Recipe`;
  const backgroundImage = {
    backgroundImage: `url(${imageLink})`
  };

  const handleTogglePopup = () => {
    dispatch(changePopupStatus(!showPopup));
  };

  return (
    <div className='mainRecipeContainer'>
      <div>
        <div className='recipeDetailPicture'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage'  style={backgroundImage} alt={altText}></div>
        </div>
        {(createdDate) && (
          <p className='centerMe'><em>Added on {moment(createdDate).format('M/D/YYYY')}</em></p>
        )}
      </div>

      <div className='mainDetailContainer'>
        <h1 className='centerMe'>{name}</h1>
        <div>
          {(url) && (
            <div className='centerMe'>
              <button className='navButtonStyle button-green'><a className='linkStyle' href={url}>Link to Page</a></button>
            </div>
          )}
          <NavButton
            linkPath={`/edit-recipe/${currentRecipe}`}
            linkText='Edit Recipe'
          />
          <div className='centerMe' onClick={() => {handleTogglePopup();}}>
            <button className='navButtonStyle button-red'>Delete Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    showPopup: state.showPopup
  };
};

MainRecipeDisplay.propTypes = {
  currentRecipe: PropTypes.string,
  imageLink: PropTypes.string,
  name: PropTypes.string,
  showPopup: PropTypes.bool,
  url: PropTypes.string
};

export default connect(mapStateToProps)(MainRecipeDisplay);
