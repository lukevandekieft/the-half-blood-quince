import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function RecipeItem({currentRecipe, name, image}) {
  let backgroundImage = {
    backgroundImage: `url(${image})`
  };
  return (
    <div className='recipeItemBox'
    // onClick= {dispatch(selectRecipe(id))}
    >
      <Link to='/recipe-detail'>
        <h3>{name}</h3>
        <div className='recipeItemImageContainer' style={backgroundImage}>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId
  };
};

RecipeItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  keypair: PropTypes.string
}

export default connect(mapStateToProps)(RecipeItem);


// <img src={props.image} alt='Mapo Tofu'/>
