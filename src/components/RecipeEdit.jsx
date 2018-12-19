import React from 'react';
import EditRecipeControl from './EditRecipeControl';

class RecipeDetail extends React.Component{

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className='pageContentSection'>
      <EditRecipeControl />
      </div>
    );
  }
}

export default RecipeDetail;
