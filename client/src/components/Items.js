import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import './Items.css'



const Items = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/items')
        .then(resp => {
            setItems(resp.data);
            console.log(resp.data);
        })
        .catch(error => console.log(error))
    }, [items.length])
    
    return (
        
        <Container fluid className="main" >
            {items.map(item => (
                <Card key={item.id} item={item}>
                       
                    <Link to={`/items/${item.id}`}>
                        <Card.Img src={item.image_url} alt={item.name} />
                    </Link>

                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <div className="Item-link">
                            <Link to={`/items/${item.id}`}>View Item</Link>
                        </div>
                        <Card.Text>{item.price}</Card.Text>
                        <Card.Text>{item.category}</Card.Text>
                    </Card.Body>

                </Card>
            ))}
        </Container>
    )
}

export default Items;