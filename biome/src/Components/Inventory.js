import React from "react"

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <div className="inventory-cards">
                    <div className="card">
                        <img></img>
                        <h2 className="card-title">Wine 1</h2>
                        <div className="inventory-level">Bottles on hand:</div>
                    </div>
                    <div className="card">
                        <img></img>
                        <h2 className="card-title">Wine 1</h2>
                        <div className="inventory-level">Bottles on hand:</div>
                    </div>
                    <div className="card">
                        <img></img>
                        <h2 className="card-title">Wine 1</h2>
                        <div className="inventory-level">Bottles on hand:</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Inventory