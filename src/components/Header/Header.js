import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <nav>
          <h3>Andrew Peliza</h3>
          <ul className='nav-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
