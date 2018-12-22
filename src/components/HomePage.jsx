import React from 'react';
import RecipeList from './RecipeList';
import NavButton from './NavButton';
import PropTypes from 'prop-types';

class HomePage extends React.Component{

  headerStyles = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52e95cdd2653761514253e73eeb938ac&auto=format&fit=crop&w=1500&q=80)',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    position: 'relative',
    boxShadow: '0px -1px 5px 1px rgba(0,0,0,0.28)'
  };
  headlineStyles = {
    fontSize: '2em',
    padding: '20px 0'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className='homePageContainer'>
        <div style={this.headerStyles}></div>
        <div className='pageContentSection'>
          <p style={this.headlineStyles}>Current Recipes</p>
            <RecipeList
              recipes={this.props.recipes}
              currentRecipe={this.props.currentRecipe}
            />
            <NavButton
              linkPath='/'
              linkText='Delete Recipe(s)'
            />
            <NavButton
              linkPath='/edit-recipe'
              linkText='Add Recipe'
            />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default HomePage;
