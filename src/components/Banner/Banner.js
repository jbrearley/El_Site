import React from 'react';

import './Banner.scss';

const Banner = () => {
  return (
    <section className='section-banner'>
      <div className='wrapper flex to-end'>
        <ul className='banner-ul'>
          <li>
            <a
              href='https://www.linkedin.com/in/andrewpeliza'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fab fa-linkedin fa-lg banner-fa-res'
                style={{ color: '#1DA1F1' }}
              ></i>
            </a>
          </li>
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
      </div>
    </section>
  );
};

export default Banner;
