import React from 'react';
import PropTypes from 'prop-types';

function Loader(props) {
  return (
    <div className={props.sectionLoader ? 'loadingSection' : 'loading'}>
      <div className='loader'></div>
    </div>
  );
}

Loader.propTypes = {
  sectionLoader: PropTypes.bool,
};

export default Loader;
