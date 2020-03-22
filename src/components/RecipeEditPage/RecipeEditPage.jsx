import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';
import NavBarBacksplash from '../NavBar/NavBarBacksplash';

class RecipeEdit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
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
    console.log(this.props)
    console.log(this.props.location.pathname.includes("/edit-recipe/"))
    //Render "new" or "edit" form based on whether a currentRecipe exists
    const currentRecipe = this.props.location.pathname.slice(13);

    let domDisplay;
      if (this.props.location.pathname.includes("/edit-recipe/")) {
        domDisplay =
          <EditRecipeForm
            currentRecipe = {currentRecipe}
            nameError = {this.state.nameError}
            onInputValidation = {this.handleInputValidation}
          />;
      } else if (this.props.location.pathname.includes("/add-recipe")) {
        domDisplay =
          <AddRecipeForm
            currentRecipe = {"1234"}
            nameError = {this.state.nameError}
            onInputValidation = {this.handleInputValidation}
          />;
      }

    return (
      <div className='contentContainer'>
        <div className='pageContentSection'>
          <NavBarBacksplash />
          {domDisplay}
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
