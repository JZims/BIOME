import React from "react"

class Login extends React.Component {
    render() {
        return (
        <div className="login-wrapper">
            <h1 className="heading">Welcome</h1><br />
            <form>
                <label for="username">Username:</label><br />
                <input type="text" id="username"/><br />
                <label for="password">Password:</label><br />
                <input type="text" id="password"/><br />
                <button>Login</button>
            </form>
        </div>
        )
    }
}


export default Login