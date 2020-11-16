import React from 'react';
import './css/App.css';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import Contact from './Contact';
import Rule from './Rule';
import Beforebooking from './Beforebooking';
import Home from './Home';
import Afterbooking from './Afterbooking';

function App() {
  return (

    <div className="App">

      <Router>

        <Header />

        <Switch>
          <Route path="/afterbooking">
              <Afterbooking />
          </Route>

          <Route path="/beforebooking">
            <Beforebooking/>
          </Route>
          <Route path="/rule">
            <Rule/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/register"> 
            <Register/>
          </Route>
          <Route path="/login">
            <div className="App__login">
              <Login />
            </div>
          </Route>
          <Route path="/">

            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
