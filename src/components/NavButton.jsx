import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavButton(props){
  return (
    <div>
      <Link to={props.linkPath}><button>{props.linkText}</button>
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  linkPath: PropTypes.string,
  linkText: PropTypes.string
}

export default NavButton;
