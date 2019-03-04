import React from 'react';
import Logo from './Logo.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newUserLogin } from '../../actions';

class NavBar extends React.Component{

  render() {
    const handleNewLogin = (event) => {
      event.preventDefault();
      this.props.dispatch(newUserLogin());
    };

    return (
      <div>
        <div className='navContainer'>
          <div className='pageContentSection navBar'>
            <Link to='/'><Logo /></Link>
            <h1>The Half-Blood Quince</h1>
              { (!this.props.user.uid || this.props.user.uid === 'initialLoadUser') && (
                <button className='loginLogout' onClick={handleNewLogin}>Login</button>)
              }
              { (this.props.user.uid && this.props.user.uid !== 'initialLoadUser') && (
                  <Link to='/home'>
                  <i className="fas fa-bars"></i>
                  </Link>
                )}
          </div>
        </div>
        <div className='navBarBackground'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavBar);
