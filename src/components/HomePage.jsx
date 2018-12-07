import React from "react";
import RecipeList from './RecipeList';
import NavButton from './NavButton';

function HomePage(){
  return (
    <div>
      Welcome friend
      <RecipeList />
      <NavButton />
      <NavButton />
    </div>
  );
}

export default HomePage;
