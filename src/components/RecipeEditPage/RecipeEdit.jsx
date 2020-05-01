import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';
import RecipeEditForm from './RecipeEditForm';
import NavBarBacksplash from '../NavBar/NavBarBacksplash';

class RecipeEdit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nameError: false
    };
    this.handleInputValidation = this.handleInputValidation.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //Set nameError state based on name input value
  handleInputValidation(name) {
    if(name) {
      if (name.value.length > 0) {
        this.setState({ nameError: false });
      } else {
        this.setState({ nameError: true });
      }
    }
  }

  render() {
    console.log(this.state);
    //Render "new" or "edit" form based on whether a currentRecipe exists
    // let domDisplay;
    // if (this.props.location.pathname.includes("/edit-recipe/")) {
    //   domDisplay =
    //     <EditRecipeForm
    //       currentRecipe = {this.props.location.pathname.slice(13)}
    //       nameError = {this.state.nameError}
    //       onInputValidation = {this.handleInputValidation}
    //     />;
    // } else if (this.props.location.pathname.includes("/add-recipe")) {
    //   domDisplay =
    //     <AddRecipeForm
    //       nameError = {this.state.nameError}
    //       onInputValidation = {this.handleInputValidation}
    //     />;
    // }
    let recipeName;
    if (this.props.location.pathname.includes("/edit-recipe/")) {
      recipeName = this.props.location.pathname.slice(13);
    }

    return (
      <div className='contentContainer'>
        <div className='pageContentSection'>
          <NavBarBacksplash />
          <RecipeEditForm
            currentRecipe = {this.props.recipes[recipeName]}
            currentRecipeName = {recipeName}
            nameError = {this.state.nameError}
            onInputValidation = {this.handleInputValidation}
          />;
        </div>;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadedInitialState: state.loadedInitialState,
    recipes: state.recipes,
  };
};

RecipeEdit.propTypes = {
  currentRecipe: PropTypes.string,
  loadedInitialState: PropTypes.bool,
  recipes: PropTypes.object,
};

export default connect(mapStateToProps)(RecipeEdit);
