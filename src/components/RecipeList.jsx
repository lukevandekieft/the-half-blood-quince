import React from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  return (
    <div className='recipeItemStyles'>
      {Object.keys(props.recipes).map(index => {
        let recipe = props.recipes[index];
        return <RecipeItem
                  name = {recipe.name}
                  image = {recipe.imageLink}
                  key = {index}
                  valueKey = {index}
                />
      })}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.object,
  currentRecipe: PropTypes.string
}

export default RecipeList;
