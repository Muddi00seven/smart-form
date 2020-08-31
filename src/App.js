import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form'
import { Grid, Cell , Button , Textfield} from 'react-mdl';
import './App.css'
function App() {
  return (
    <GlobalProvider>
      <Form/>
    </GlobalProvider>
  
  );
}

export default App;
