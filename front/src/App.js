import React from 'react';
import './App.css';
import Contacts from './views/Contacts/Contacts';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <Container className={'my-5'}>
        <Contacts />
      </Container>
    </Provider>
  );
}

export default App;
