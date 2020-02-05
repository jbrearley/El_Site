import React from 'react';

import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header = props => {
  return (
    <header>
      <div className='wrapper'>
        <nav>
          <h3>Andrew Peliza</h3>
          <ul className='nav-list'>
            <NavItem link='/' exact>
              Home
            </NavItem>
            <NavItem link='/experience' exact>
              Experience
            </NavItem>
            <NavItem link='/projects' exact>
              Projects
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
