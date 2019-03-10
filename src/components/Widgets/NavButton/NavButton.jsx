import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavButton(props) {
    const { linkPath, linkText, color } = props;
    let buttonStyle = 'navButtonStyle button-green';
    if (color) {
      buttonStyle = `navButtonStyle button-${color}`;
    }
    return (
      <div className='centerMe'>
        <Link to={linkPath}><button className={buttonStyle}>{linkText}</button>
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
