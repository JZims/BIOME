import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useSelector, useDispatch} from 'react-redux'

function Manifest(props) {

const manifestItemArray=useSelector(state => state.manifestReducer.itemsToChange)
// const allUserBeverageArray=useSelector(state => state.userReducer.beverages)

const dispatch = useDispatch()


const manifestItems = manifestItemArray.map(item => {
     return( 
            <Row>
            <Col xs={12} >
              <p className="manifest_item_text">{item.proprietary_name}, {item.producer_name} -------  {item.quantity_change}</p>
            </Col>
             </Row>
    )
    })

    function clearManifest(){
        dispatch({type: "update_item", payload: []})
        props.onHide()
    }
 

    function handleSubmitManifest(){

        return (
                manifestItemArray.map(itemToUpdate => {
                    console.log(itemToUpdate.beverageId)
                fetch(`http://localhost:3000/inventories/${itemToUpdate.inventoryId}`, {
                    method: "PATCH", 
                    headers: {
                        "Content-Type": "Application/json", 
                        "Authorization": `Bearer ${localStorage.token}`
                    }, body: JSON.stringify({quantity: itemToUpdate.quantity_change})
                })
                .then(res => res.json())
                .then(newInv => {
                    console.log(newInv)
                    dispatch({type: "update_beverages", payload: newInv})
                    dispatch({type: "update_item", payload: []})
                    props.onHide()
                    // const newInvArray = [newInv]
                    // const locatedBeverage = allUserBeverageArray.filter(obj => obj.id === itemToUpdate.beverageId )
                    // const updatedInventories = locatedBeverage[0].inventories.map(obj => newInvArray.find(o => o.id === obj.id) || obj)
                
              })
            }
          )  
        )     
      }


    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" id="manifest">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
         Daily Manifest
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {manifestItems}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={clearManifest}>Clear Manifest</Button>
        <Button onClick={handleSubmitManifest}>Submit</Button>
      </Modal.Footer>
    </Modal>
    )
}
export default Manifest