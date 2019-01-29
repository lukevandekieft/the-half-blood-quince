import React from 'react';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

function RecipeDetail(){
  let headlineStyles = {
    
  }

  return (
    <div>
      <div className='navContainer'>
        <div className='pageContentSection navBar'>
        <Link to='/'><Logo /></Link>
          <h1 style={headlineStyles}>The Half-Blood Quince</h1>
          <h1 style={headlineStyles}>Menu</h1>
        </div>
      </div>
      <div className='navBarBackground'></div>
    </div>
  );
}

export default RecipeDetail;
