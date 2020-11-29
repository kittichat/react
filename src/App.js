import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.css';

import Header from './Header';

import Login from './authen/Login';
import Register from './authen/Register';
import Contact from './component/Contact';
import Rule from './component/Rule';
import Beforebooking from './booking/Beforebooking';
import Home from './component/Home';
import Afterbooking from './booking/Afterbooking';
import Profile from './component/Profile'

function App() {
  return (

    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/afterbooking"  component={Afterbooking} />
          <Route path="/beforebooking" component={Beforebooking} />
          <Route path="/rule" component={Rule}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/register" component={Register}/> 
          <Route path="/profile" component={Profile}/>
          <Route path="/login">
            <div className="App__login">
              <Login />
            </div>
          </Route>
          <Route path="/" component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
