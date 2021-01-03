import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';


const EditItemForm = (props) => {
    

    const initialFormState = {
        name: '',
        price: '',
        category: '',
        image: {}
        }
    //initialFormState is an empty form, calls get method
    let params = useParams();
    const [item, setItem] = useState(initialFormState);
    
    
    // onChange, tracks the key strong change for input
    const onChange = (e) => {

        setItem(() => {
            if (e.target.name === "image")
                return ({ ...item, image : e.target.files[0] })
            else    
                return ({ ...item,
                
                    [e.target.name] : e.target.value 
                });
             });
            };
    
    
    // onSubmit -> edit item name, category, price, not image 
    const onSubmit = (e) => {

        e.preventDefault();

        axios.put(`glacial-plains-19625.herokuapp.com/api/v1/items/${params.id}`, item)
        .then(resp => {
            setItem(resp.data)
        })
        .catch(error => console.log(error, error))
        //redirects the page to the item 'show' page after successful update
        // props.history.push(`/items/${item.id}`))
    }
    

    





    return (

        <Container fluid className="main">
            
            
            <form onSubmit={onSubmit}>
                <Form.Group controlid="editItemForm">
                    <Form.Label>Edit This Item</Form.Label>
                        <h3>{console.log(item)}</h3>
                        <p>New Name: </p>
                        <Form.Control   
                            as="input"
                            type="text"
                            value={item.name}
                            placeholder="Update Item Name?"
                            name="name"
                            onChange={onChange} 
                        />

                        <p>New Price: </p>
                        <Form.Control   
                            as="input"
                            type="text"
                            value={item.price}
                            placeholder="Update Item Price?"
                            name="price"
                            onChange={onChange} 
                        />

                        <select
                        name="category"
                        category={item.value}
                        onChange={onChange}>
                            <option
                            value="shelving">Shelving</option>
                            <option
                            value="lighting">Lighting</option>
                            <option
                            value="wall decor">Wall Decor</option>
                            <option
                            value="tables">Tables</option>
                            <option
                            value="seating">Seating</option>
                            <option
                            value="kitchen">Kitchen</option>
                        </select>

                        <p>New Item Image: </p>
                        <Form.File
                            id="itemImage"
                            type="file"
                            label="Item Photo"
                            name="image"
                            onChange={onChange} 
                        />

                    <Button type="submit" variant="outline-info">Edit</Button>

                </Form.Group>
            </form>
        
        </Container>
    )

}

export default EditItemForm;