import React from 'react';
import PropTypes from 'prop-types';
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
                <i className="fas fa-bars" onClick={() => {this.props.onToggleMenu(this.props.mainMenuShowing)}}></i>
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
    mainMenuShowing: state.mainMenuShowing,
    user: state.user,
  };
};

NavBar.propTypes = {
  mainMenuShowing: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  user: PropTypes.any,
}

export default connect(mapStateToProps)(NavBar);
