// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pet-shop-logo.png';

const Header = () => (
  <aside className="menu white-bg">
    <div className="main-content menu-content">
      <h1>
        <img src={logo} alt="C&G PET Logo" />
        <Link to="/">C&G PET</Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </div>
  </aside>
);

export default Header;
