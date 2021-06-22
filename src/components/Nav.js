import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import Manifest from './Manifest'

function Nav({handleLogOut}) {

    const isLoggedIn = useSelector((state) => state.navigationReducer.isLoggedIn)
    const itemsInManifest = useSelector((state) => state.manifestReducer.itemsToChange)

    const [showManifest, setShowManifest] = useState(false)
    

    return (
        <div >
        { isLoggedIn ? 
            <div>
            <Navbar bg="dark" fixed="top">
            <Container className="navbar-container">
                <Navbar.Brand href="/inventory">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Wine_logo.svg/1024px-Wine_logo.svg.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="BIOME logo"
                    thumbnail
                />
                 
                </Navbar.Brand>
                <Button type="button" size="sm" onClick={handleLogOut}> Log Out </Button> 
                <Button type="button" onClick={() => setShowManifest(true)}> Manifest <Badge bg="success">{itemsInManifest.length}</Badge></Button>
                <Manifest show={showManifest} onHide={() => setShowManifest(false)}/>
            </Container>
            </Navbar>
            
            </div>
            : null  
            }
        
       
    </div>
    )
}
export default Nav 