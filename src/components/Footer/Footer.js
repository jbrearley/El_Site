import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer>
    <div className='wrapper flex-row footer-container'>
      <article>
        <h4 className='footer-header'>Site</h4>
        <ul>
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
      </article>
      <article>
        <h4 className='footer-header'>Follow me</h4>
        <ul className='footer-ul'>
          <li>
            <a
              href='https://twitter.com/APeliza'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fab fa-twitter fa-lg'
                style={{ color: '#1DA1F1' }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/ElAndy94'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-lg'></i>
            </a>
          </li>
          <li>
            <a
              href='https://stackoverflow.com/users/4920343/andrew?tab=profile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fab fa-stack-overflow fa-lg'
                style={{ color: '#FF9900' }}
              ></i>
            </a>
          </li>
        </ul>
      </article>
    </div>
  </footer>
);

export default withRouter(Footer);
