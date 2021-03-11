import React from 'react';
import { Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { TagList } from '../../../constants/TagList';
import { updateFilterList } from '../../../actions';

class FilterList extends React.Component {  

  handleGlobalFilterChange = (tag) => {
    if (this.props.filterList.includes(tag)) {
      this.props.dispatch(
        updateFilterList(
          this.props.filterList.filter(e => e !== tag)
        )
      );
    } else {
      this.props.dispatch(
        updateFilterList(
          this.props.filterList.concat(tag)
        )
      );
    }
  }
  
  createCheckList = (array, handlerFunction, filterList) => {
    if(array.length > 0){
      return array.map((each) => {
        if (filterList?.includes(each)) {
          return(
            <Chip 
              label={each} 
              onClick={() => handlerFunction(each)}
              size="small"
              color="primary"
            />
          )
        } else {
          return(
            <Chip 
              label={each} 
              onClick={() => handlerFunction(each)} 
              size="small"
              variant="outlined"
            />
          )
        }
      }, this.props)
    } else {
      return []
    }
  }

  render() {
    // if we're passing props then we have local state to use, like tags from a recipe. If no props are received we assume it's editing global search tags
    const handlerFunction = this.props.handleChange ?? this.handleGlobalFilterChange;
    const filtersInUse = this.props.tags ?? this.props.filterList;

    return (
      <div className="filterBox">
        <h3>Filters</h3>
        <div className="filterGrid">
          {this.createCheckList(TagList, handlerFunction, filtersInUse)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterList: state.filterList
  };
};

export default withRouter(connect(mapStateToProps)(FilterList));