import React from 'react';
import RecipeList from './RecipeList';
import NavButton from './NavButton';

function HomePage(){
  return (
    <div className='pageContentSection'>
    <p>Current Recipes</p>
      <RecipeList />
      <NavButton />
      <NavButton />
    </div>
  );
}

export default HomePage;
