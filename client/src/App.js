import Praha_Logo from './Praha_Logo.svg';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
        
          <div className="Main-container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/items" component={Items}/>
              <Route exact path="/items/:id" component={Item}/>
              <Route exact path="/create" component={AddItemForm}/>
              <Route exact path="/items/:id/update" component={EditItemForm}/>
            </Switch>
          </div>
    </div>
  );
}

export default App;
