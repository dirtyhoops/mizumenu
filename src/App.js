import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DinnerMenu from './components/pages/dinnermenu/DinnerMenu';
import LunchMenu from './components/pages/lunchmenu/LunchMenu';
import LandingPage from './components/pages/landingpage/LandingPage';
import NavBar from './components/layout/NavBar/NavBar';
import DrinkMenu from './components/pages/drinkmenu/DrinkMenu';

// Import the sass styling
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className='container'>
          {/* <NavBar /> */}

          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/dinner' component={DinnerMenu} />
            <Route exact path='/lunch' component={LunchMenu} />
            <Route exact path='/drinks' component={DrinkMenu} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
