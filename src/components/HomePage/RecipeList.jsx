import React from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';

const RecipeList = ({recipes, currentRecipe, searchValue}) => {
  return (
    <div className='recipeItemStyles'>
      {Object.keys(recipes).map(index => {
        let recipe = recipes[index];
        if (searchValue === null || recipe.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return <RecipeItem
                    name = {recipe.name}
                    image = {recipe.imageLink}
                    key = {index}
                    valueKey = {index}
                  />
        }
      })}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string,
  searchValue: PropTypes.any
}

export default RecipeList;

// let newArray = string.split(/\n+-*\s*/i);
