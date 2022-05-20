import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.sass';

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? '#0f3f7e' : '',
});

function Navbar () {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>React assignments</h1>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink to='/' style={defineNavLinkStyle}>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/SignUpForm' style={defineNavLinkStyle}>
              Sign up Form
            </NavLink>
          </li>
          <li>
            <NavLink to='/CreateAccountForm' style={defineNavLinkStyle}>
              Create account
            </NavLink>
          </li>
          <li>
            <NavLink to='/Slider' style={defineNavLinkStyle}>
              Slider
            </NavLink>
          </li>
          <li>
            <NavLink to='/UsersList' style={defineNavLinkStyle}>
              Users list
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
