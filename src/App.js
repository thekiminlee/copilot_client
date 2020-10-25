import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

import { Switch, Route } from 'react-router-dom';

import Main from './views/main.view.jsx'
import OfficeHour from './views/officehour.view.jsx';
import OfficeHours from './views/officehours.view.jsx';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/officehour/:id' component={OfficeHour}/>
      <Route path='/officehours' component={OfficeHours}/>
    </Switch>
  );
}

export default App;
