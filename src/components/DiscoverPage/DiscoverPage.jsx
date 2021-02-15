import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchValue } from '../../actions';

import Loader from '../Widgets/Loader/Loader';
import NavButton from '../Widgets/NavButton/NavButton';
import RecipeList from '../HomePage/RecipeList';
import SearchModal from '../Widgets/SearchModal/SearchModal';
import edamam from '../../assets/images/edamam.png';

class DiscoverPage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  }

  render() {
    const { isFetching, searchList, searchTerm, user } = this.props;

    //Toggle recipe header when search is active
    let headerMessage;
    if (searchTerm) {
      headerMessage =
        <h1 className='headline'>{`Showing results for '${searchTerm}'`}</h1>;
    } else {
      headerMessage =
        <div className='emptyContentMessage discoverPage'>
          <h2>There's nothing here!</h2>
          <p>Search above to discover your next big meal</p>
        </div>;
    }

    let recipeDisplay;
    if(isFetching) {
      recipeDisplay =
        <Loader
          sectionLoader = {true}
        />;
    } else {
      recipeDisplay =
        <React.Fragment>
          {headerMessage}
          {(user !== 'initialLoadUser') && (
            <RecipeList
              recipes={searchList}
              searchValue={null}
            />
          )}
        </React.Fragment>;
    }

    return (
      <div className='contentContainer'>
        <div className='headerSection discoverPage'>
          <SearchModal />
        </div>
        <div className='pageContentSection headerPage'>
          {recipeDisplay}
          <NavButton
            linkPath='/'
            linkText='Go To My Recipes'
          />
          <div className='edamamContainer'>
            <a href='https://www.edamam.com/' className='edamam'><img src={edamam} alt="Edamam Logo"/></a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.lastRecipeSearch.isFetching,
    searchList: state.lastRecipeSearch.searchList,
    searchTerm: state.lastRecipeSearch.searchTerm,
    user: state.user,
  };
};

DiscoverPage.propTypes = {
  isFetching: PropTypes.bool,
  lastRecipeSearch: PropTypes.object,
  searchList: PropTypes.object,
  searchTerm: PropTypes.string,
  user: PropTypes.any
};

export default connect(mapStateToProps)(DiscoverPage);
