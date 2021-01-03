import Praha_Logo from './Praha_Logo.svg';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Items from './components/Items';
import Item from './components/Item';
import Home from './components/Home';
import EditItemForm from './components/EditItemForm';
import AddItemForm from './components/AddItemForm';


function App(props) {
  return (
    <Router>
    <div>
      
      <Header />
      
      
          
        <Switch>
          <Route path="https://glacial-plains-19625.herokuapp.com/items/:id/update">
            <EditItemForm />
          </Route>
          <Route exact path="https://glacial-plains-19625.herokuapp.com/items/:id">
            <Item />
          </Route>
          <Route path="https://glacial-plains-19625.herokuapp.com/items">
            <Items />
          </Route>
          
              
          <Route path="https://glacial-plains-19625.herokuapp.com/create">
            <AddItemForm />
          </Route>
              
          <Route path="https://glacial-plains-19625.herokuapp.com/">
            <Home />
          </Route>
        </Switch>
        
      
    </div>
   </Router> 
  );
}

export default App;
