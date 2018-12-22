import React from 'react';
import EditRecipeForm from './EditRecipeForm';
import PropTypes from 'prop-types';

class RecipeEdit extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    let domDisplay;
    if (this.props.loadedInitialState) {
      domDisplay =
      <div className='pageContentSection'>
        <EditRecipeForm
        history={this.props.history}/>
      </div>
    } else {
      domDisplay =
      <div className='loading'>
        <div className='loader'></div>
      </div>
    }
    return (
      <div>
        {domDisplay}
      </div>
    );
  }
}

export default RecipeEdit;
