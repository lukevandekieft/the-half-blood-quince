import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, changePopupStatus } from '../../actions';
import { withRouter } from 'react-router-dom';

function RecipeItem({dispatch, image, location, name, showPopup, user, valueKey}) {

  //Change currentRecipe to clicked item
  const handleClick = (key) => {
    dispatch(changeCurrentRecipe(key, user));
  };

  //set background based on props
  const backgroundImage = {
    backgroundImage: `url(${image})`
  };

  //delete recipe from popup
  const handleClickDelete = () => {

  };

  //close popup from popup
  const handleClickCancel = (popupStatus) => {
    const newPopup = !popupStatus;
    dispatch(changePopupStatus(newPopup));
  };

  let recipeBox;
  if (location.pathname === '/discover-recipes') {
    recipeBox =
    <div className='recipeItemBox' onClick={() => {handleClickCancel(showPopup)}}>
      <a>
        <h3>{name}</h3>
        <div className='recipeItemImageContainer'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage' style={backgroundImage}>
          </div>
        </div>
      </a>
      <p style={showPopup ? {display: 'none'} : {}}>Toggle Status!</p>
    </div>
  } else {
    recipeBox =
    <div className='recipeItemBox' onClick={() => {handleClick(valueKey)}}>
      <Link to='/recipe-detail'>
        <h3>{name}</h3>
        <div className='recipeItemImageContainer'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage' style={backgroundImage}>
          </div>
        </div>
      </Link>
    </div>
  }
  return (
    <React.Fragment>
      {recipeBox}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    showPopup: state.showPopup,
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
