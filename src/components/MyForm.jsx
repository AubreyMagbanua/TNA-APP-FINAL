import styles from "./MyForm.module.css"
import Button from "./SecondBtn"
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';

export default function MyForm() {
  const [registerUser, setUser] = useState('')
  const [registerEmail, setEmail] = useState('')
  const [registerPass, setPass] = useState('')
  const [registerConfirmpass, setConfirmpass] = useState('')
  const [flag, setFlag] = useState(false)
  const [regStatuseErr, setRegstaterr] = useState('')
  
  const login = () =>{
  
      Axios.post('http://localhost:3000/login',{
          username: registerUser, 
          email: registerEmail, 
          password: registerPass,
          cpass: registerConfirmpass
      }).then((response)=>{
          console.log(response)
          if (response.data.message == "Successfully Registered"){
          window.location.href='./Login'
          }else{
          setRegstaterr(response.data.message)
          setFlag(true);
          }
          
      })
  
  
      };
  return (
    
      <div className={styles.container}>
      <div className= {styles.form}>
        <h3> University Logbook</h3>
        <h2> User Authentication</h2>
        <div className={styles.txt_field} >
          <label>Username: </label>
            <input type="text" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Password: </label>
            <input type="Password" required></input>
        </div>
        <div className={styles.txt_field} >
          <label>Birthdate: </label>
            <input type="date" required></input>
        </div>
        <div className={styles.formButtons}>
        <a href="/admindash"><Button variant="primary">Log In</Button></a>
        {/* <a href="/studentreg"><Button variant="secondary">Sign In</Button></a> */}
      </div>
        </div>   
      </div>

  );
};

