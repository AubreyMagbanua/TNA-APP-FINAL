import React from 'react';
import styles from './MyHeader.module.css';
import logo from './logo.png';
import Button from './MyButton';


export const MyHeader = () => {
    return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={logo} alt=''/>
         </div>
            <p>Technological University of the Philippines - Cavite</p>
        <div className={styles.headerButtons}>
            <a href="/"><Button variant="primary">Home</Button></a>
      </div>
    </div>
    )
} 