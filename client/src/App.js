import Praha_Logo from './Praha_Logo.svg';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  
    <div className="App">
      
      <Header />
      <Router>
        
          <div className="Main-container">
            <Switch>
              <Route path="/items/:id/update" ><EditItemForm /></Route>
              <Route exact path="/items/:id" component={Item} />
              <Route path="/items"><Items /></Route>
              
              <Route exact path="/create" component={AddItemForm} />
              
              <Route exact path="/praha-store" component={Home} />
            </Switch>
          </div>
      </Router>
    </div>
    
  );
}

export default App;
