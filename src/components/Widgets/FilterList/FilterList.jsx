import React from 'react';
import PropTypes from 'prop-types';
import { TagList } from '../../../constants/TagList';

function FilterList() {

  
  const createCheckList = (array) => {
    if(array.length > 0){
      return array.map(function(each){
        return(<p>{each}</p>)
      })
    } else {
      return []
    }
  }
  
  return (
    <div>
      {createCheckList(TagList)}
    </div>
  );
}

FilterList.propTypes = {

};

export default FilterList;