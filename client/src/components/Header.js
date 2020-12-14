import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {

    return ( 
        <Container fluid className="header">
            <Navbar expand="lg">
                <div className="main-logo">
                    <Navbar.Brand href="/">p r a h a</Navbar.Brand>
                    <br />
                    <aside className="brand-statement">european cottage for contemporary lifestyles</aside>
                </div>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/items">Items</Nav.Link>
                    <Nav.Link href="/create">Add New Items</Nav.Link>
                </Nav>

                <Form inline className="searchbar">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </Container>
    )
}

export default Header;