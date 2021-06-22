import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useSelector, useDispatch} from 'react-redux'

function Manifest(props) {

const manifestItemArray = useSelector(state => state.manifestReducer.itemsToChange)

const manifestItems = manifestItemArray.map(item => {
     return( 
            <Row>
            <Col xs={12} >
              <p>{item.proprietary_name}, {item.producer_name} -------  {item.quantity_change}</p>
            </Col>
             </Row>
    )
    })
 
    function handleSubmitManifest(){
        console.log("hi")
    }


    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
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
        <Button onClick={handleSubmitManifest}>Submit</Button>
      </Modal.Footer>
    </Modal>
    )
}
export default Manifest