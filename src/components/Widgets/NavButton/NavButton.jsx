import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function NavButton(props) {
  const { linkPath, linkText, color } = props;

  //if color prop is passed then change class
  let buttonStyle = 'navButtonStyle button-green';
  if (color) {
    buttonStyle = `navButtonStyle button-${color}`;
  }
    
  return (
    <div className='centerMe'>
      <Link to={linkPath}><Button className={buttonStyle} variant="contained">{linkText}</Button>
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
  color: PropTypes.string
};

export default NavButton;
