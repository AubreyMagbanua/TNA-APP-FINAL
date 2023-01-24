import styles from "./Departments.module.css";
// import Button from '@mui/material/Button';

const Departments = () => {
    return (
    <div className={styles.container}>
        <h1> &nbsp; </h1>
        <h1> &nbsp; </h1>
        <h2>University Colleges</h2>
        <div className={styles.line}>
            <hr />
        </div>
        <div className={styles.box}>
        <div className={styles.image}>
            <img src="./images/cafa.png" alt="cafa"/>
        </div>
        <div className={styles.image}>
            <img src="./images/cie.png" alt="cie"/>
        </div>
        <div className={styles.image}>
            <img src="./images/cit.png" alt="cit"/>
        </div>
        <div className={styles.image}>
            <img src="./images/cla.png" alt="cla"/>
        </div>
        <div className={styles.image}>
            <img src="./images/coe.png" alt="coe"/>
        </div>
        <div className={styles.image}>
            <img src="./images/cos.png" alt="cos"/>
        </div>
        </div>
    </div>
    )
}
export default Departments;