import React from 'react';

import './Projects.scss';
import Banner from '../../components/Banner/Banner';

const Projects = () => (
  <React.Fragment>
    <Banner />
    <section className='section'>
      <div className='wrapper'>
        <article className='projects-title--container'>
          <h1 className='projects-title'>Projects</h1>
          <p>The projects page info</p>
        </article>
      </div>
    </section>
    <section>
      <div className='wrapper flex projects-container'>
        <article>
          <h2>AJ Gyms</h2>
          <p>
            A React Gym application which lets you sign up to the gym, book
            classes, view booked classes, remove booked classes and update your
            profile information.
          </p>
        </article>
        <article>
          <h2>PWA-Gram</h2>
          <p>PWA Web App which gives you a unique mobile feel to a web app.</p>
        </article>
      </div>
    </section>
  </React.Fragment>
);

export default Projects;
