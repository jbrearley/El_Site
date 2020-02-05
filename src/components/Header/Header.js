import React, { useState } from 'react';

import './Header.scss';
import NavItem from './NavItem/NavItem';

const Header = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  const smartToggler = () => {
    if (burgerMenuToggled) setBurgerMenuToggled(false);
  };

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
            <div
              className={burgerMenuToggled ? 'line modified-line-01' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-02' : 'line'}
            ></div>
            <div
              className={burgerMenuToggled ? 'line modified-line-03' : 'line'}
            ></div>
          </div>
          <ul
            className={burgerMenuToggled ? 'nav-list open' : 'nav-list'}
            onClick={() => {
              smartToggler();
            }}
          >
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
