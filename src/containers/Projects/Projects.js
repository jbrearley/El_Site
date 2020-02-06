import React from 'react';

import './Projects.scss';
import Banner from '../../components/Banner/Banner';

const Projects = () => (
  <React.Fragment>
    <Banner />
    <section className='section'>
      <div className='wrapper'>
        <article>
          <h2>Projects</h2>
          <p>The projects page info</p>
        </article>
      </div>
    </section>
    <section className='section'>
      <div className='wrapper flex flex-row projects-container'>
        <article>
          <p>The projects page info</p>
        </article>
        <article>
          <p>The projects page info</p>
        </article>
      </div>
    </section>
  </React.Fragment>
);

export default Projects;
