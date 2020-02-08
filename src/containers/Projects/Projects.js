import React from 'react';

import './Projects.scss';
import Banner from '../../components/Banner/Banner';
import Button from '../../components/UI/Button';

const Projects = () => (
  <React.Fragment>
    <Banner />
    <section className='section'>
      <div className='wrapper'>
        <article className='projects-title--container'>
          <h1 className='projects-title'>Projects</h1>
          <p>All my projects can be found in my Github</p>
        </article>
      </div>
    </section>
    <section>
      <div className='wrapper flex projects-container'>
        <article>
          <div className='article-content-boxes'>
            <h3>AJ Gyms</h3>
            <p>
              A React Gym application which lets you sign up to the gym, book
              classes, view booked classes, remove booked classes and update
              your profile information.
            </p>
          </div>
          <a
            href='https://github.com/ElAndy94/AJGyms'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button btnType='success'>
              <span className='btn--invisible'>AJGyms</span>
              <i className='fab fa-github fa-lg btn--visible'></i>
            </Button>
          </a>
        </article>
        <article>
          <div className='article-content-boxes'>
            <h3>PWA-Gram</h3>
            <p>
              PWA Web App which gives you a unique mobile feel to a web app.
              This is where caching is taken to the next level, a little taste
              of the future.
            </p>
          </div>
          <a
            href='https://github.com/ElAndy94/pwa-gram'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button btnType='success'>
              <span className='btn--invisible'>PWA</span>
              <i className='fab fa-github fa-lg btn--visible'></i>
            </Button>
          </a>
        </article>
      </div>
    </section>
  </React.Fragment>
);

export default Projects;
