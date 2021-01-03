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
          <Route path="/items/:id/update">
            <EditItemForm />
          </Route>
          <Route exact path="/items/:id">
            <Item />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          
              
          <Route path="/create">
            <AddItemForm />
          </Route>
              
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      
    </div>
   </Router> 
  );
}

export default App;
