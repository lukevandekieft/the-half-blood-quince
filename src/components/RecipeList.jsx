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

      {/* This section added to provide more recipes - delete when more data is available */}
      {Object.keys(props.recipes).map(index => {

        let recipe = props.recipes[index];
        return <RecipeItem
                  name = {recipe.name}
                  image = {recipe.imageLink}
                  key = {index}
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
