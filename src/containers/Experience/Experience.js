import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import './Experience.scss';

const Experience = () => (
  <section className='section'>
    <div className='wrapper'>
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
            <p>• Assisting in investigating and resolving web/software bugs.</p>
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
            <h3 className='padding-bottom-sm' style={{ color: '#61b8ff' }}>
              Lead Frontend Developer, Dyne (Contract)
            </h3>
            <p>
              • Using React inc Redux combined with Typescript ( Graphql ) Node.
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
              FullStack Developer, Eversmart Energy (Contract)
            </h3>
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
              Software Developer, Manchester Metropolitan University (Contract)
            </h3>
            <p>• Develop a bespoke application for real-world use.</p>
            <p>
              • Research, design, implement and test a custom web application to
              support the creation of augmented reading lists.
            </p>
            <p>
              • An application which allows tutors to upload documents which can
              then be annotated with simplifications and explanations where
              necessary.
            </p>
            <p>
              • Participating in ongoing research and making a difference to the
              learning experience of other students.
            </p>
            <p>• Ensure consistency and maximise efficiency.</p>
          </TimelineItem>
        </Timeline>
      </article>
    </div>
  </section>
);

export default Experience;
