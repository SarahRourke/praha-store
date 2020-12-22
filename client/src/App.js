import Praha_Logo from './Praha_Logo.svg';
import React from 'react';
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
  <Router>
    <div className="App">
      
      <Header />
        
          <div className="Main-container">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/items"><Items /></Route>
              <Route exact path="/items/:id"><Item /></Route>
              <Route exact path="/create" ><AddItemForm /></Route>
              <Route exact path="/items/:id/update"><EditItemForm /></Route>
            </Switch>
          </div>
    </div>
    </Router>
  );
}

export default App;
