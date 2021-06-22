import React, { useState }from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'



function InventoryCard({beverageId, proprietary_name, producer_name, vintage, category, image_url, bin, quantity}) {

    
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [itemCount, setItemCount] = useState(0)

    const manifestArray = useSelector(state => state.manifestReducer.itemsToChange)
    const beverageArray = useSelector(state => state.userReducer.beverages)
    // const itemCount = useSelector(state => state.manifestReducer.itemCount)
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

    function handleAddToManifest(){
        if(itemCount >= 0){
            setItemCount(value => value + 1)
            handleManifestObj()
            // dispatch({type: "addition", payload: itemCount + 1})
        } else { 
            setItemCount(value => value=1)
            handleManifestObj()
            // dispatch({type: "addition", payload: 1})
        }
        console.log(itemCount)
       
    }

    function handleSubtractFromManifest(){
        if(itemCount <= 0){
            setItemCount(value => value -1)
            handleManifestObj()
            // dispatch({type: "subtraction", payload: itemCount - 1})
        } else { 
            setItemCount(value => value= -1)
            handleManifestObj()
            // dispatch({type: "subtraction", payload: -1})
            console.log(itemCount)
        }

        
    }

    function handleManifestObj(){

        const findObjInManifest = manifestArray.filter(obj => obj.beverageId === beverageId)

        if(findObjInManifest.length > 0) {
                const checkForExistingItem = manifestArray.map(obj => {
                    if (obj.beverageId === beverageId){
                         obj.quantity_change=itemCount 
                         return obj
                } else {return obj}
        })
        
            dispatch({type: "update_item", payload: checkForExistingItem})
        } else {
                const newObj = {
                beverageId: beverageId,
                producer_name: producer_name, 
                proprietary_name: proprietary_name, 
                quantity_change: itemCount
            }
            console.log(newObj)
                dispatch({type: "add_new", payload: newObj})
            
        }
        
        
    }

    
    return (
        <div className="beverage_card">
            <img src={image_url} alt={proprietary_name} className="beverage_image"/>
            <h3>{proprietary_name}</h3>
            <h4>{producer_name}</h4>
            <p>Vintage: {vintage}</p>
            <p>BIN #: {bin}</p>
            <p>Qty: {quantity} </p>
            <ButtonGroup aria-label="add/delete">
                <Button size="sm" onClick={handleAddToManifest}>+</Button>
                <Button size="sm" onClick={handleSubtractFromManifest}>-</Button>
            </ButtonGroup>
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