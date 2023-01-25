
import styles from "../components/StudentForm.module.css";
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

export default function StudentForm() {
  const [logUser, setUser] = useState('')
  const [logPass, setPass] = useState('')
  const [flag, setFlag] = useState(false)
  const [logStatuseErr, setlogstaterr] = useState('')
  
  const login = () =>{
  
    Axios.post('http://172.16.22.225:3000/signin',{
      username: logUser, 
      password: logPass,
    }).then((response) => {
        if (response.data.message === 'Verified'){
          window.location.href='/Motion_detect'
        }else{
            setlogstaterr(response.data.message)
            setFlag(true);
        }
      });
    
    
        };
  return (
    
    <div className= {styles.container}> 

        <div className= {styles.form}>
        <div className={styles.image1}>
            <img src="./images/logo.png" alt="logo"/>
        </div>
        <h3> Sign Up </h3>
        <div className={styles.txt_field} >
          <label>Username: </label>
            <input type="text" onChange={(e)=>{setUser(e.target.value);}} id="loggun" required></input>
        </div>
        <div className={styles.txt_field3} >
          <label>Password: </label>
            <input type="password" onChange={(e)=>{setPass(e.target.value);}} id="logpass" required></input>
        </div>
        <div className={styles.StudentformButtons}>
            <button type="submit" onClick={login} className={styles.submitButton}>Submit</button>
           
      </div>
        <div className={styles.box} >
          <div>
          <a href="/resetpass" variant="secondary">Forgot password?</a>
          </div>
          <div>
          <a href="/Studentreg" variant="secondary">Don't have an Account?</a>
          </div>
        </div>
      {flag &&(<Alert color="primary" variant="danger">{logStatuseErr}</Alert>)}
      </div>   
    </div>
      

  );
};
