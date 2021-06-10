import React from "react"

class Signup extends React.Component {
    render() {
        return (
        <div className="login-wrapper">
            <h1 className="heading">Sign Up</h1><br />
            <form>
                <label for="email">Email:</label><br />
                <input type="text" id="email"/><br />
                <label for="password">Password:</label><br />
                <input type="text" id="password"/><br />
                <label for="password-confirm">Confirm password:</label><br />
                <input type="text" id="password"/><br />
                <button>Sign up</button>
            </form>
        </div>
        )
    }
}


export default Signup