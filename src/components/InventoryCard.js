import React, { useState }from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'



function InventoryCard({beverageId, proprietary_name, producer_name, vintage, category, image_url, bin}) {

    const [deleteAlert, setDeleteAlert] = useState(false)
    const beverageArray = useSelector(state => state.userReducer.beverages)
    const dispatch = useDispatch()

    const handleClose = () => setDeleteAlert(false);
    const handleShow = () => setDeleteAlert(true);


    function handleDelete(){
        fetch(`http://localhost:3000/beverages/${beverageId}`, {
            method: "DELETE", 
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(res => {
            const bevAfterDelete = beverageArray.filter(beverage => {
                return beverage.id !== beverageId
              })
              
              dispatch({type: "delete_item", payload: bevAfterDelete})
            
        })
    }

    
    return (
        <div className="beverage_card">
            <img src={image_url} alt={proprietary_name} className="beverage_image"/>
            <h3>{proprietary_name}</h3>
            <h4>{producer_name}</h4>
            <p>Vintage: {vintage}</p>
            <p>BIN #: {bin}</p>
            <Button onClick={ handleShow }> Delete Item </Button>

            <Modal show={deleteAlert} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>Delete Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>This action will delete the Beverage for all users. Are you sure you would like to proceed?</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Cancel
            </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}
export default InventoryCard