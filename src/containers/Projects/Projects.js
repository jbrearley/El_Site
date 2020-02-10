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
          <p>All my projects can be found in my Github. </p>
          <p>I shared two interesting projects below.</p>
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
    {/* <section className='section'>
      <div className='wrapper'>
        <div>
          <h4>Certifications</h4>
          <div className='composition'>
            <img
              src='/assets/images/advCSS.jpg'
              alt='advCSS'
              className='composition__photo composition__photo--p1'
            />
            <img
              src='/assets/images/algo.jpg'
              alt='Photo 2'
              className='composition__photo composition__photo--p2'
            />
            <img
              src='/assets/images/angular.jpg'
              alt='Photo 3'
              className='composition__photo composition__photo--p3'
            />
            <img
              src='/assets/images/es6.jpg'
              alt='Photo 4'
              className='composition__photo composition__photo--p4'
            />
            <img
              src='/assets/images/express.jpg'
              alt='Photo 5'
              className='composition__photo composition__photo--p5'
            />
            <img
              src='/assets/images/introPy.jpg'
              alt='Photo 6'
              className='composition__photo composition__photo--p6'
            />
            <img
              src='/assets/images/mean.jpg'
              alt='Photo 7'
              className='composition__photo composition__photo--p7'
            />
            <img
              src='/assets/images/mongoose.jpg'
              alt='Photo 8'
              className='composition__photo composition__photo--p8'
            />
            <img
              src='/assets/images/oop.jpg'
              alt='Photo 9'
              className='composition__photo composition__photo--p9'
            />
            <img
              src='/assets/images/react.jpg'
              alt='Photo 10'
              className='composition__photo composition__photo--p10'
            />
            <img
              src='/assets/images/sass.jpg'
              alt='Photo 11'
              className='composition__photo composition__photo--p11'
            />
          </div>
        </div>
      </div>
    </section> */}
  </React.Fragment>
);

export default Projects;
