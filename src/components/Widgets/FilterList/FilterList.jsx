import React from 'react';
import PropTypes from 'prop-types';
import { TagList } from '../../../constants/TagList';

import { Chip } from '@material-ui/core';

function FilterList(props) {  
  
  const createCheckList = (array) => {
    if(array.length > 0){
      return array.map(function(each) {
        if (props.tags?.includes(each)) {
          return(
            <Chip 
              label={each} 
              onClick={() => props.handleChange(each)}
              size="small"
              color="primary" 
            />
          )
        } else {
          return(
            <Chip 
              label={each} 
              onClick={() => props.handleChange(each)} 
              size="small" 
            />
          )
        }
      }, props)
    } else {
      return []
    }
  }

  return (
    <React.Fragment>
      {createCheckList(TagList)}
    </React.Fragment>
  );
}

FilterList.propTypes = {

};

export default FilterList;