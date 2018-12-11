import React from 'react';
import Logo from './Logo.jsx';

function RecipeDetail(){
  let headlineStyles = {
    fontSize: '2em',
    padding: '20px 0'
  }

  return (
    <div>
      <div className='navContainer'>
        <div className='pageContentSection navBar'>
          <Logo />
          <p style={headlineStyles}>The Half-Blood Quince</p>
          <p style={headlineStyles}>Menu</p>
        </div>
      </div>
      <div className='navBarBackground'></div>
    </div>
  );
}

export default RecipeDetail;
