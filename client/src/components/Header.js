import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Praha_Logo from '../Praha_Logo.svg';
import './Header.css';

const Header = () => {

    return ( 
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
    )
}

export default Header;