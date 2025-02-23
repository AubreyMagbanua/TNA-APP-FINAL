import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Home from './Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function Login() {

const[emaillog, setEmaillog] = useState("");
const[passwordlog, setPasswordlog] = useState("");
const[flag, setFlag] = useState(false);
const[home, setHome] = useState(true);

function handleLogin(e){
    e.preventDefault();
    let email = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");

    }else if (emaillog !== email || passwordlog !== pass){
        setFlag(true);
    }else{
        setHome(!home);
        setFlag(false);
    }
}
    return (
        <div>

            {home ? (
            
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className='form-group'>
                <label>Email: </label>
                <input type = "text" className='form-control' placeholder='Enter your email..' onChange={(event)=> setEmaillog(event.target.value)}></input> 
                </div>
                <div className='form-group'>
                <label>Password: </label>
                <input type = "password" className='form-control' placeholder='Enter your password..' onChange={(event)=> setPasswordlog(event.target.value)}></input>  
                </div>
                <div className='form-group'>
                    <button type="submit" className='btn btn-dark btn-lg'>Submit</button>
                </div> 
                <div className='form-group'>
                    <a href='/Registration'>Sign up?</a>
                </div>
                <div className='form-group'>
                    <a href='/Forgotpass'>Forgot Password</a>
                </div>
                {flag && (
                    <Alert color="primary" variant='danger'>Please fill correct info</Alert>
                )} 
            </form>
            ):(
                <Home/>
            )}
        </div>
    )
}
export default Login