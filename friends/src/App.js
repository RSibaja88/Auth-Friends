import React from 'react';
import './App.css';
import Friends from './components/Friends';
import LogIn from './components/LogIn';
import Nav from './Nav';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="header"><Nav/></div>
    <div className="banner"><img src="https://i.imgur.com/hb7J3L4.jpg"/></div>
      <div className='App'>
     
     <Route path='/login' component={LogIn}/>
        <Redirect from='/' to='/login'/>
     <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path='/login'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
