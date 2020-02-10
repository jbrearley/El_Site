import React from 'react';

// import './Experience.scss';
import Banner from '../../components/Banner/Banner';
import Timeline from '../../components/Timeline/Timeline';

const Experience = () => {
  return (
    <React.Fragment>
      <Banner />
      <section className='section experience-section'>
        <div className='wrapper'>
          <article className='center'>
            <h1>Experience</h1>
          </article>
          <article className='timeline-container'>
            <Timeline />
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Experience;

/*
  <p>
    Feel free to toggle between two different layouts of my experience
  </p>
    <div className='toggle'>
    <input type='checkbox' className='check' />
    <b className='b switch'></b>
    <b className='b track'></b>
  </div> 
*/
