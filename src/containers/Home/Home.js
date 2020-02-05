import React from 'react';

import './Home.scss';

function Home() {
  return (
    <section className='section'>
      <div className='wrapper'>
        <article className='home-container'>
          <h2>Hello!</h2>
          <p>My name is Andrew Peliza, I am a Software Engenieer.</p>
          <p>
            A passion for development with an added bonus of a First Class
            Honours Degree in Computer Science.
          </p>
          <p>
            Diverse set of skills ranging from; HTML5, CSS/SCSS(Sass),
            JavaScript (Express, Node.js, Angular.js, Vue.js, React.js,
            TypeScript) jQuery, Python, AWS, PHP, SQL, and basic knowledge of
            other languages...
          </p>
          <p>
            I enjoy challenges and consider myself an enterprising individual
            who likes to take risks and use my own initiative.
          </p>
          <p>
            Approachable personality in which I can socialise well with the
            public and work well in a team.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
