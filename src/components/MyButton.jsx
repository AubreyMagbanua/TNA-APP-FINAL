import React from 'react';
import styles from './MyButton.module.css'

const Button = ({ children, variant }) => {
    return (
    <div>
        <button className={styles.primary}>{children}</button>
      </div>
    )
}
 
 export default Button;
