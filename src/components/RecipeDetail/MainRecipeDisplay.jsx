import React from 'react';
import PropTypes from 'prop-types';
import NavButton from '../Widgets/NavButton/NavButton';
import StarRating from '../Widgets/StarRating/StarRating';
import { connect } from 'react-redux';
import { changePopupStatus } from '../../actions';
import moment from 'moment';
import Button from '@material-ui/core/Button';

function MainRecipeDisplay({author, createdDate, currentRecipe, dispatch, imageLink, name, rating, showPopup, url}){
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
        {(rating) && (
          <StarRating 
            rating={rating}
            displayType={"readOnly"}
          />
        )}
      </div>

      <div className='mainDetailContainer'>
        <h1 className='centerMe'>{name}</h1>
        {author && (
          <h3 className='centerMe'>{author}</h3>
        )}
        <div>
          {(url) && (
            <div className='centerMe'>
              <Button className='navButtonStyle button-green' variant="contained"> 
                <a className='linkStyle' href={url} target="_blank" rel="noopener noreferrer">Link to Page</a>
              </Button>
            </div>
          )}
          <NavButton
            linkPath={`/edit-recipe/${currentRecipe}`}
            linkText='Edit Recipe'
          />
          <div className='centerMe' onClick={() => {handleTogglePopup();}}>
            <Button className='navButtonStyle button-red' variant="contained">Delete Recipe</Button>
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
  rating: PropTypes.number,
  showPopup: PropTypes.bool,
  url: PropTypes.string
};

export default connect(mapStateToProps)(MainRecipeDisplay);
