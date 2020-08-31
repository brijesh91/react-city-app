import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Shortlist from './components/pages/Shortlist';
import CityState from './context/city/CityState'
import './App.css';

const App = () => {
  return (
    <CityState>
      <Router>
        <Fragment>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path ='/shortlist' component={Shortlist}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </CityState>
  );
}

export default App;
