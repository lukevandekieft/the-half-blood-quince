import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, changePopupStatus } from '../../actions';
import { withRouter } from 'react-router-dom';

function RecipeItem({dispatch, ingredients, image, location, name, showPopup, url, user, valueKey}) {

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

  return (
    <React.Fragment>
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
      </div>
      {showPopup ?
        <div className='popup discoverPage'>
          <div className='popup-inner'>
            <h3>{name}</h3>
            <div className='popup-buttons'>
              <div className='centerMe'>
                <a href={url}><button className='navButtonStyle button-red'>Visit Recipe Site</button>
                </a>
              </div>
              <div className='centerMe'>
                <button onClick={() => {handleClickCancel(showPopup)}} className='navButtonStyle button-green'>Go Back</button>
              </div>
            </div>
          </div>
        </div>
        : null
      }
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
  showPopup: PropTypes.bool,
  user: PropTypes.object,
  valueKey: PropTypes.string
};

export default withRouter(connect(mapStateToProps)(RecipeItem));
