import React from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';

function RecipeList(props){
  console.log(props);
  return (
    <div className='recipeItemStyles'>
      {Object.keys(props.recipes).map(index => {

        let recipe = props.recipes[index];
        return <RecipeItem
                  name = {recipe.name}
                  image = {recipe.image_link}
                  key = {index}
                />
      })}

      {/* This section added for volume - delete when more data is available */}
      {Object.keys(props.recipes).map(index => {

        let recipe = props.recipes[index];
        return <RecipeItem
                  name = {recipe.name}
                  image = {recipe.image_link}
                  key = {index}
                />
      })}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.object
}

export default RecipeList;
