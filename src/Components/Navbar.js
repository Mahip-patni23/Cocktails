import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav className="navbar">
      <h2>The<span>Cocktail</span>DB</h2>
      <ul className="links">
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
      </ul>
    </nav>
}

export default Navbar