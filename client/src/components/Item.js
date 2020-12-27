import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import { Link, Route, useParams, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Item.css';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';



// single item display page, buttons 'delete' deletes item-object by item_id from database, and 'edit' button redirects to the item updated page.

const Item = (props) => {
    //test to ensure props/arguments are accurate on rendering

        
        let params = useParams();
        const [item, setItem] = useState( { ...params.id });
        const [loaded, setLoaded] = useState(false)
            
        useEffect(() => {
            
            axios.get(`/api/v1/items/${params.id}`)
            .then(resp => {
                setItem(resp.data);
                
                setLoaded(true);
            })
            .catch(error => console.log(error));}, );

        const deleteItem = (id) => {
            axios.delete(`/api/v1/items/${item.id}`)
            .then(resp => {
                props.history.push('/items');
            })
            .catch(error => {
                console.log(error);
            });
        };

        return (
            <Container fluid='md' className="ItemContainer">
                {
                    loaded &&
                        <>
                            <Card>
                                <h5>Item Details</h5>
                                <Card.Img src={item.image_url} alt="add Image"/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>${item.price}</Card.Text>
                                    <Card.Text>{item.category}</Card.Text>
                                </Card.Body>
                                {/* delete button redirects to Itemsj page and edit button redirects to item update page */}
                                <Link to={`/items/${item.id}/update`}><Button variant="outline-info">Edit</Button></Link>
                                <Button type="submit" variant="outline-danger" onClick={() => deleteItem(item.id)}>Delete</Button>
                            </Card>
                        </>
                }
            </Container>
        )
        
}

export default Item;

