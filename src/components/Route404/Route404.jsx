import React, { Component } from 'react';
import NavBarBacksplash from '../NavBar/NavBarBacksplash';
import { Link } from 'react-router-dom';

export default class Route404 extends Component {
  render () {
    return(
      <div className='contentContainer'>
        <NavBarBacksplash />
        <div className='pageContentSection route404'>
          <h1>Whoops, there's nothing here!</h1>
          <p>Click <Link to="/">here</Link> to return to the home page.</p>
        </div>
      </div>
    );
  }
}