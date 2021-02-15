import React from 'react';
import { Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { TagList } from '../../../constants/TagList';
import { updateFilterList } from '../../../actions';

class FilterList extends React.Component {  

  handleFilterChange = (tag) => {
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
  
  createCheckList = (array) => {
    if(array.length > 0){
      return array.map((each) => {
        if (this.props.filterList?.includes(each)) {
          return(
            <Chip 
              label={each} 
              onClick={() => this.handleFilterChange(each)}
              size="small"
              color="primary"
            />
          )
        } else {
          return(
            <Chip 
              label={each} 
              onClick={() => this.handleFilterChange(each)} 
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
    return (
      <div className="filterBox">
        <h3>Filters</h3>
        <div className="filterGrid">
          {this.createCheckList(TagList)}
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