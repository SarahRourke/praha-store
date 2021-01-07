import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import FormData from 'form-data';
import { Container, Form, Button } from 'react-bootstrap';
import Item from './Item';


class AddItemForm extends Component {
    constructor(props) {
        super(props);
        //sets image to null so it will accept a file upload - using a string or object parameter prevents the file from attaching
            this.state = { name: '', price: '', category: '', image: null };
    }

    onChange = (e) => {
        this.setState(() => {
            //sets file base for image upload then active storage computes the data into the correct blob form
            if (e.target.name === "image")
            return {
                image : e.target.files[0]
            }
            else return {
                [e.target.name || e.target.value] : e.target.value
            }
        });
    };

    onSubmit = (e) => {
        //[prevents the page from regreshing after subit
        e.preventDefault();
        //FormData import from 'npm install form-data' api
        const form = new FormData()
        form.append("name", this.state.name)
        form.append("price", this.state.price)
        form.append("category", this.state.category)
        form.append("image", this.state.image)

        //sets the FormData as new item data
        axios.post('api/v1/items', form)
        .then((resp) => {
            console.log(resp)
            //redirects to created item Item page
            this.props.history.push(`/items/${this.state.id}`);
            console.log(resp.data.id);
            
            
        })
        .catch(error => console.log('error', error));
    }

    render() {
        return (
            <Container fluid className="main">
                <form onSubmit={this.onSubmit}>
                    <Form.Label>Add New Item</Form.Label>
                        <h3>{console.log(this.state)}</h3>
                        <Form.Group>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Item Name"
                                name="name"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Item Price"
                                name="price"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <select 
                        name="category"
                        category={this.state.value} onChange={this.onChange}>
                            <option
                            value="shelving">Shelving</option>
                            <option 
                            value="lighting">Lighting</option>
                            <option
                            value="wall decor">Wall Decor</option>
                            <option
                            value="tables">Tables</option>
                            <option 
                            value="kitchen">Kitchen</option>
                        </select>

                        <Form.Group>
                            <Form.File
                                id="itemImage"
                                type="file"
                                label="Item Photo"
                                name="image"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                    <Button variant="outline-info"
                    type="submit">Add This Item</Button>
                </form>
            </Container>
        )
    }
}

export default AddItemForm;