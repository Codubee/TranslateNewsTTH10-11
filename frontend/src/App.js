import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './views/LandingPage'
import Navbar from './components/Navbar'
import News from './views/News'

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/News">
              <News />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;