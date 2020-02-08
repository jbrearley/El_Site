import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Experience from './containers/Experience/Experience';
import Projects from './containers/Projects/Projects';
// import Footer from './components/Footer/Footer';

function App() {
  let routes = (
    <Switch>
      <Route path='/experience' component={Experience} />
      <Route path='/projects' component={Projects} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );

  return (
    <React.Fragment>
      <Header />
      {routes}
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
