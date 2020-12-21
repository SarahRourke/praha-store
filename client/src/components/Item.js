import React, { useState, useEffect } from 'react';
import './Item.css';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// single item display page, buttons 'delete' deletes item-object by item_id from database, and 'edit' button redirects to the item updated page.

const Item = (props) => {
    //test to ensure props/arguments are accurate on rendering

        console.log(props.match.params.id)

        const [item, setItem] = useState({ ...props.match.params });
        const [loaded, setLoaded] = useState(false)

        useEffect(() => {
            axios.get(`api/v1/items/${props.match.params.id}`)
            .then(resp => {
                setItem(resp.data);
                console.log(resp.data);
                setLoaded(true);
            })
        })
}

