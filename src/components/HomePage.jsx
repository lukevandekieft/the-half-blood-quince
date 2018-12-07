import React from 'react';
import RecipeList from './RecipeList';
import NavButton from './NavButton';

function HomePage(){
  return (
    <div className='pageContentSection'>
      Welcome friend
      <RecipeList />
      <NavButton />
      <NavButton />
    </div>
  );
}

export default HomePage;
