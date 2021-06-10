import React from "react"
import menuItems from "./MenuItems.js"
import './Navbar.css'


class Navbar extends React.Component {



    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">BIOME</h1>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}><a className="{item.cName}" href="{item.url}">{item.title}</a></li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}


export default Navbar