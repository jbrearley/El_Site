import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const Experience = () => (
  <section className='section'>
    <div className='wrapper'>
      <article>
        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key='001'
            dateText='March 2019 – Present'
            style={{ color: '#e86971' }}
          >
            <h3 className='padding-bottom-sm'>
              Frontend Developer, Think Money Group
            </h3>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key='002'
            dateText='04/2009 – 11/2010'
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 className='padding-bottom-sm' style={{ color: '#61b8ff' }}>
              Title, Company
            </h3>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key='003'
            dateText='08/2008 – 11/2008'
            dateInnerStyle={{ background: 'rgb(150, 150, 150)' }}
          >
            <h3 className='padding-bottom-sm'>Title, Company</h3>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key='004'
            dateText='08/2008 – 11/2008'
            dateInnerStyle={{ background: '#76bb7f' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <h3 className='padding-bottom-sm'>Title, Company</h3>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
        </Timeline>
      </article>
    </div>
  </section>
);

export default Experience;
