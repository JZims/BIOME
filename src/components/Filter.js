import React, { useState } from 'react'
import NewItem from './NewItem';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


function Filter() {

        const [newItemModalShow, setNewItemModalShow] = useState(false);

    return (
        <div className="filter"> 
                
            <Navbar fixed="bottom">
            <Container className="navbar-container">
                <Button variant="primary" onClick={() => setNewItemModalShow(true)}>
                Add New Item
                 </Button>
    
                <NewItem
                show={newItemModalShow}
                onHide={() => setNewItemModalShow(false)}
                />
            </Container>
            </Navbar>
            

         
        </div>
    )
}
export default Filter