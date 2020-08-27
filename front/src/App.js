import React from 'react';
import './App.css';
import Contacts from './views/Contacts/Contacts';
import { Container } from 'reactstrap';

import Register from './views/Register/Register';
import Login from './views/Login/Login';

import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector(state => state.auth.user)
  return (
    <Container className={'my-5'}>
      <Router>
        {user ?
          <Switch>
            <Route path='/contacts' render={(props) => <Contacts {...props} />} />
            <Route path='/' render={(props) => <Redirect to={'/contacts'} {...props} />} />
          </Switch> :
          <Switch>
            <Route path='/login' render={(props) => <Login {...props} />} />
            <Route path='/register' render={(props) => <Register {...props} />} />
            <Route exact path='/' render={(props) => <Redirect to={'/login'} {...props} />} />
            <Route  path='/' render={(props) => <Redirect to={'/register'} {...props} />} />
          </Switch>
        }
      </Router>
    </Container>
  );
}

export default App;
