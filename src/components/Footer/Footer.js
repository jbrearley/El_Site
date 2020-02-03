import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer>
    <div className='wrapper flex-row footer-container'>
      <article>
        <h4 className='footer-header'>Site</h4>
        <ul>
          <li>Home</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </article>
      <article>
        <h4 className='footer-header'>Follow me</h4>
        <ul>
          <li>
            <i className='fab fa-twitter'></i>
          </li>
          <li>
            <i className='fab fa-github'></i>
          </li>
          <li>
            <i className='fab fa-stack-overflow'></i>
          </li>
        </ul>
      </article>
    </div>
  </footer>
);

export default Footer;
