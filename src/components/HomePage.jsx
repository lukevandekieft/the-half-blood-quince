import React from 'react';
import RecipeList from './RecipeList';
import NavButton from './NavButton';
import PropTypes from 'prop-types';

function HomePage(props){

  let headerStyles = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52e95cdd2653761514253e73eeb938ac&auto=format&fit=crop&w=1500&q=80)',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    position: 'relative',
  };
  let headlineStyles = {
    fontSize: '2em',
    padding: '20px 0'
  };

  return (
    <div className='homePageContainer'>
      <div style={headerStyles}></div>
      <div className='pageContentSection'>
        <p style={headlineStyles}>Current Recipes</p>
          <RecipeList
            recipes={props.recipes}
          />
          <NavButton />
          <NavButton />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  recipes: PropTypes.object
}

export default HomePage;
