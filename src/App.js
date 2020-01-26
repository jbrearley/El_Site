import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Hobbies from './containers/Hobbies/Hobbies';
import Work from './containers/Work/Work';
import Qualifications from './containers/Qualifications/Qualifications';
import './App.scss';

function App() {
  let routes = (
    <Switch>
      <Route path='/hobbies' component={Hobbies} />
      <Route path='/work' component={Work} />
      <Route path='/qualifications' component={Qualifications} />
      <Route path='/' exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );

  return [routes];
}

export default App;
