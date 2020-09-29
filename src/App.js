import React from 'react';
import './App.css';

import Header from './components/header'
import List from './components/list'

import {
  Container  
} from './components/styles'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <List />
      </Container>
    </div>
  );
}

export default App;
