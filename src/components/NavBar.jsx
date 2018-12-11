import React from 'react';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

function RecipeDetail(){
  let headlineStyles = {
    fontSize: '2em',
    padding: '20px 0'
  }

  return (
    <div>
      <div className='navContainer'>
        <div className='pageContentSection navBar'>
        <Link to='/'><Logo /></Link>
          <p style={headlineStyles}>The Half-Blood Quince</p>
          <p style={headlineStyles}>Menu</p>
        </div>
      </div>
      <div className='navBarBackground'></div>
    </div>
  );
}

export default RecipeDetail;
