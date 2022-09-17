import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <nav>

    <h1>Bookstore CMS</h1>

    <ul>

      <li key="1">
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li key="2">
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>

    </ul>
    <div className="userIcon"><FaUserAlt style={{ color: '#0290ff' }} /></div>
  </nav>
);

export default Navbar;
