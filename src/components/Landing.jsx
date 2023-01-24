import styles from "./Landing.module.css";
// import Link from "next/link";

const Landing = () => {
    return (
    <div className={styles.container}>    
        <div className={styles.image}>
            <img src="./images/logo.png" alt="logo"/>
        </div>
        <div className={styles.content}>
            <h1>BACHELOR OF<br/> ENGINEERING - MAJOR <br/> IN COMPUTER ENGINEERING <br/> TECHNOLOGY </h1>
            <a href="/Login"><button className={styles.login}>LOGIN</button></a>
        </div>
    </div>
    );
};
export default Landing;