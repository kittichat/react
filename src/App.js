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
import Paymenthistory from './component/Paymenthistory'
import Bookinghistory from './component/Bookinghistory'
import Group from './booking/Group'

function App() {
  return (

    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/afterbooking"  component={Afterbooking} />
          <Route exact path="/beforebooking" component={Beforebooking} />
          <Route exact path="/rule" component={Rule}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/register" component={Register}/> 
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/bookinghistory" component={Bookinghistory} />         
          <Route exact path="/paymenthistory" component={Paymenthistory} />
          <Route exact path="/groupplayer" component={Group} />
          
          {/* <Route exact path="" component={} /> */}
          
          <Route exact path="/login">
         
          {/* <Route exact path="/" /> */}
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
