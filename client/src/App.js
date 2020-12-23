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
        
          
            <Switch>
              <Route path="/api/v1/items/:id/update" ><EditItemForm /></Route>
              <Route exact path="/api/v1/items/:id" component={Item} />
              <Route path="/api/v1/items" component={Items} />
              
              <Route exact path="/api/v1/create" component={AddItemForm} />
              
              <Route exact path="/praha-store" component={Home} />
            </Switch>
          
      </Router>
    </div>
    
  );
}

export default App;
