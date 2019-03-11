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
    }
    this.handleInputValidation = this.handleInputValidation.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputValidation(name) {
    if(name) {
      if (name.value.length > 0) {
        console.log(name.value.length);
        this.setState({ nameError: true });
      } else {
        console.log('wut up');
        this.setState({ nameError: false });
      }
      console.log(this.state);
    }
  }

  render() {

    let domDisplay;
    if (this.props.recipes) {
      if (this.props.recipes[this.props.currentRecipe]) {
        domDisplay =
          <div className='pageContentSection'>
            <EditRecipeForm
              nameError={this.state.nameError}
              onInputValidation={this.handleInputValidation}
            />
          </div>;
      } else {
        domDisplay =
          <div className='pageContentSection'>
            <AddRecipeForm />
          </div>;
      }
    } else {
      domDisplay =
        <div className='pageContentSection'>
          <AddRecipeForm />
        </div>;
    }

    return (
      <div className='contentContainer'>
        <NavBarBacksplash />
        {domDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
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
