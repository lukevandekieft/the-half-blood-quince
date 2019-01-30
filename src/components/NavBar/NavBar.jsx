import React from 'react';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';

function RecipeDetail(){
  return (
    <div>
      <div className='navContainer'>
        <div className='pageContentSection navBar'>
          <Link to='/'><Logo /></Link>
          <h1>The Half-Blood Quince</h1>
          <Link to='/'>
            <h1>Menu</h1>
            <i className="fas fa-bars"></i>
          </Link>
        </div>
      </div>
      <div className='navBarBackground'></div>
    </div>
  );
}

export default RecipeDetail;
