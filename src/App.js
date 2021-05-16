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
import Paymenthistory from './history/Paymenthistory'
import Bookinghistory from './history/Bookinghistory'
import Group from './booking/Group'
import Individualgroup from './booking/Individualgroup';


import Group1 from './booking/showall/Group1'
import Group2 from './booking/showall/Group2'
import Group3 from './booking/showall/Group3'
import Group4 from './booking/showall/Group4'
import Group5 from './booking/showall/Group5'
import Group6 from './booking/showall/Group6'
import Group7 from './booking/showall/Group7'
import Group8 from './booking/showall/Group8'
import Group9 from './booking/showall/Group9'
import Group10 from './booking/showall/Group10'
import Groupdetail from './booking/Groupdetail';
import Calendar_background from './booking/calendar/Calendar_background';
import deleteme from './authen/deleteme';

import Week from './booking/GroupBooking/Week'

function App() {
  return (

    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/test" component={deleteme} />
          <Route exact path="/groupbooking" component={Week} />
          <Route exact path="/userbooking"  component={Afterbooking} />
          <Route exact path="/beforebooking" component={Beforebooking} />
          <Route exact path="/rule" component={Rule}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/register" component={Register}/> 
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/bookinghistory" component={Bookinghistory} />         
          <Route exact path="/paymenthistory" component={Paymenthistory} />
          <Route exact path="/groupplayer" component={Group} />
          <Route exact path="/individualgroup" component={Individualgroup} />
          <Route exact path="/dateselection" component={Calendar_background} />
          <Route exact path="/group1" component={Group1} />
          <Route exact path="/group2" component={Group2} />
          <Route exact path="/group3" component={Group3} />
          <Route exact path="/group4" component={Group4} />
          <Route exact path="/group5" component={Group5} />
          <Route exact path="/group6" component={Group6} />
          <Route exact path="/group7" component={Group7} />
          <Route exact path="/group8" component={Group8} />
          <Route exact path="/group9" component={Group9} />
          <Route exact path="/group10" component={Group10} />
          <Route exact path="/detail" component={Groupdetail} />
 
          
          <Route exact path="/login">
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
