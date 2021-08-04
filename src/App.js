import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

import {Home} from './pages/Home'
import { About } from './pages/About';
import { Error } from './pages/Error';
import {Singlecocktail} from './pages/Singlecocktail'


function App() {
  return <Router>
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/about'>
        <About></About>
      </Route>
      <Route path="/cocktails/:id" children={<Singlecocktail></Singlecocktail>}>
      </Route>
      <Route path='*'>
        <Error></Error>
      </Route>
    </Switch>
  </Router>

}

export default App;
