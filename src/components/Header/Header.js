import React, { useState } from 'react';

import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  return (
    <header>
      <div className='wrapper'>
        <nav>
          <h3>Andrew Peliza</h3>
          <div
            className='burger'
            onClick={() => {
              setBurgerMenuToggled(!burgerMenuToggled);
            }}
          >
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <ul className={burgerMenuToggled ? 'nav-list open' : 'nav-list'}>
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
