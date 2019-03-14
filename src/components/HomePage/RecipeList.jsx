import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RecipeItem from './RecipeItem';
import RecipeSearchItem from '../DiscoverPage/RecipeSearchItem';

const RecipeList = ({recipes, searchValue, location}) => {

  return (
    <div className='recipeItemStyles'>
      { recipes && (location.pathname === '/discover-recipes') && (
        Object.keys(recipes).map(index => {
          let recipe = recipes[index];
            return <RecipeSearchItem
              name = {recipe.name}
              image = {recipe.imageLink}
              url = {recipe.url}
              ingredients = {recipe.ingredients}
              key = {index}
              valueKey = {index}
            />;
        })
      )}
      { recipes && (location.pathname !== '/discover-recipes') && (
        Object.keys(recipes).map(index => {
          let recipe = recipes[index];
            if (searchValue === null || recipe.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return <RecipeItem
                name = {recipe.name}
                image = {recipe.imageLink}
                key = {index}
                valueKey = {index}
              />;
            }
        })
      )}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.object,
  searchValue: PropTypes.any
};

export default withRouter(RecipeList);
