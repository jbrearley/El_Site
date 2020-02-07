import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import './Experience.scss';
import Banner from '../../components/Banner/Banner';

const Experience = () => (
  <React.Fragment>
    <Banner />
    <section className='section'>
      <div className='wrapper'>
        <article>
          <h1>Experience</h1>
        </article>
        <article className='timeline-container'>
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
                • Building the front end of web based applications using the
                latest techniques and technologies (full websites, customer
                journeys, landing pages, HTML ads).
              </p>
              <p>
                • Working in a cross functional team, and attending SCRUMs and
                project meetings.
              </p>
              <p>
                • Liaising with other front-end and back-end developers,
                designers, SEO team, PPC, testers and implementation staff.
              </p>
              <p>
                • Ensuring cross-platform optimisation across required devices.
              </p>
              <p>
                • Interpreting customer requirements to deliver efficient,
                functional solutions.
              </p>
              <p>
                • Keeping up-to-date with latest technologies and suggest when
                appropriate to implement.
              </p>
              <p>
                • Assisting in investigating and resolving web/software bugs.
              </p>
            </TimelineItem>
            <TimelineItem
              key='002'
              dateText='Jan 2019 – April 2019'
              dateInnerStyle={{ background: '#61b8ff', color: '#fff' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className='padding-bottom-sm'>
                Lead Frontend Developer, Dyne
              </h3>
              <h4>Contract</h4>
              <p>
                • Using React inc Redux combined with Typescript ( Graphql )
                Node.
              </p>
              <p>
                • Coordinating with, and implementing handovers from, the design
                team.
              </p>
              <p>• Developing production grade front end web architecture.</p>
              <p>
                • Ensuring cross-platform optimisation across required devices.{' '}
              </p>
              <p>
                • Conceptualising and implementing robust QA and testing
                frameworks.{' '}
              </p>
              <p>
                • Taking ownership of, and managing / seeing through a project
                from conception to finalisation.{' '}
              </p>
              <p>• Meeting both technical and business needs. </p>
              <p>
                • Staying abreast of developments in web applications and
                programming languages.
              </p>
            </TimelineItem>
            <TimelineItem
              key='003'
              dateText='Sep 2018 – Nov 2018'
              dateInnerStyle={{ background: 'rgb(150, 150, 150)' }}
            >
              <h3 className='padding-bottom-sm'>
                FullStack Developer, Eversmart Energy
              </h3>
              <h4>Contract</h4>
              <p>• Developing software in time for release date. </p>
              <p>• Making sure that the system is ready for lunch day. </p>
              <p>
                • Checking that the full website is reponsive on all browsers{' '}
              </p>
              <p>• Fixing errors or simplying code. </p>
              <p>• Ensure consistency throughout.</p>
            </TimelineItem>
            <TimelineItem
              key='004'
              dateText='Jun 2018 – Sep 2018'
              dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className='padding-bottom-sm'>
                Software Developer, Manchester Metropolitan University
              </h3>
              <h4>Contract</h4>
              <p>• Develop a bespoke application for real-world use.</p>
              <p>
                • Research, design, implement and test a custom web application
                to support the creation of augmented reading lists.
              </p>
              <p>
                • An application which allows tutors to upload documents which
                can then be annotated with simplifications and explanations
                where necessary.
              </p>
              <p>
                • Participating in ongoing research and making a difference to
                the learning experience of other students.
              </p>
              <p>• Ensure consistency and maximise efficiency.</p>
            </TimelineItem>
            <TimelineItem
              key='005'
              dateText='May 2013 – Aug 2015'
              dateInnerStyle={{ background: '#48cdc4' }}
            >
              <h3 className='padding-bottom-sm'>
                Managing Director of Andy Holdings Ltd
              </h3>
              <p>
                • Assisted the clients with refurbishments and other duties as
                required, working in line with health and safety.
              </p>
              <p>
                • Supplied all deliveries to the clients personally which made
                me dependable and punctual.
              </p>
              <p>
                • Managed my time for projects and their deadlines which helped
                me learn to work under pressure.
              </p>
              <p>• Delivered high standards to exceed the customers’ needs.</p>
            </TimelineItem>
            <TimelineItem
              key='006'
              dateText='Oct 2012 – Mar 2013'
              dateInnerStyle={{ background: '#4750cd' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className='padding-bottom-sm'>
                Co-Founder of Avanti Construction & Maintenance
              </h3>
              <p>
                • Learnt the fundamentals of owning a business and the
                responsibilities associated.
              </p>
              <p>
                • Read over contracts thoroughly and ensure that contract
                requirement is met.
              </p>
              <p>
                • Made cost estimations for different types of refurbishments
                with various scales of projects.
              </p>
              <p>
                • Lead a team of over fifteen employees which strongly improved
                my responsibility skills.
              </p>
            </TimelineItem>
            <TimelineItem
              key='007'
              dateText='Mar 2011 – May 2011'
              dateInnerStyle={{ background: '#e86971' }}
            >
              <h3 className='padding-bottom-sm'>
                IT Technician, Systems Services, Gibraltar
              </h3>
              <p>
                • Installed and configured internet content filtering system for
                client businesses.
              </p>
              <p>
                • Installed software on computers for customers independently.
              </p>
              <p>
                • Regularly took computers apart and rebuilt them for customers.
              </p>
              <p>• Found and replaced defected component(s)</p>
            </TimelineItem>
          </Timeline>
        </article>
      </div>
    </section>
  </React.Fragment>
);

export default Experience;
