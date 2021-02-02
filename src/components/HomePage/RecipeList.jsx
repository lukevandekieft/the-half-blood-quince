import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';
import RecipeSearchItem from '../DiscoverPage/RecipeSearchItem';

const RecipeList = ({ filterList, location, recipes, searchValue }) => {

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
          let recipeTags = recipe.tags ? recipe.tags : [];
          let searchPass = searchValue ? recipe.name.toLowerCase().includes(searchValue.toLowerCase()) : true;
          let filterPass = filterList.length > 0 ? recipeTags.some(r=> filterList.includes(r)) : true;
          if (filterPass && searchPass) {
            return <Link to={`/recipe/${index}`} className ="recipeLink" key = {index}>
              <RecipeItem
                author = {recipe.author}
                name = {recipe.name}
                image = {recipe.imageLink}
                rating = {recipe.rating}
                recipeStatus = {recipe.recipeStatus}
              />
            </Link>;
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
