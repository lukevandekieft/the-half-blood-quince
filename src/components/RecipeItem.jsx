import React from "react";
import { Link } from 'react-router-dom';

function RecipeItem(){
  return (
    <div>
      <Link to='/recipe-detail'>
        <p>Recipe!</p>
        <img src="https://cdn1.iconfinder.com/data/icons/fruit-28/64/SET-154-128.png" alt="we tested bois"/>
      </Link>
    </div>
  );
}

export default RecipeItem;
