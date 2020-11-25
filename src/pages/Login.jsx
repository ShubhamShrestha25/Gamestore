import React, { Component } from 'react'

class Login extends Component {
    

    render () {
    return (
        <div>
            <form>
            <div className="box">
               <div className="inputbox"> 
               <h1>Login</h1>
                <label>Username {""}</label>
                <input type="text" name="Username" autoComplete="off" required />
                </div>
                <div className="inputbox"> 
                <label>Password {""} </label>
                <input type="password" name="Username" required/>
                </div>
                <button type="submit"  className="loginButton">Login</button>
            </div>
            </form>
        </div>
    )
    }
}

export default Login
