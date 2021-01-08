import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Praha_Logo from './Praha_Logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Items from './components/Items';
import Item from './components/Item';
import Home from './components/Home';
import EditItemForm from './components/EditItemForm';
import AddItemForm from './components/AddItemForm';


function App(props) {
  return (
    <Router>
      <div>
        
        <Container fluid className="header">
              <Navbar expand="lg">
                  <Navbar.Brand href="/praha-store">
                      <img src={Praha_Logo} className="praha-logo" alt="praha"/>
                  </Navbar.Brand>
                  {/* <Form inline className="searchbar">
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-primary">Search</Button>
                  </Form> */}
                  <Nav>
                      <Nav.Link href="/praha-store">Home</Nav.Link>
                      <Nav.Link href="/items">Items</Nav.Link>
                      <Nav.Link href="/create">Add New Items</Nav.Link>
                  </Nav>

                  
              </Navbar>
          </Container>
      
      
      <Container fluid className="main">
        <Switch>
         
          <Route path="/items/:id/update">
            <EditItemForm />
          </Route>
          <Route exact path="/items/:id">
            <Item />
          </Route>
          <Route exact path="/items">
            <Items />
          </Route>
          
              
          <Route path="/create">
            <AddItemForm />
          </Route>
              
           <Route path="/praha-store">
            <Home />
          </Route>
        </Switch>
      </Container>    
        
      
    </div>
   </Router> 
  );
}

export default App;
