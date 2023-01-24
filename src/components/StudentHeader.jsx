import styles from "./StudentHeader.module.css";
import logo from "./logo.png";

const StudentHeader = () => {
    return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="" />
        </div>
        <div className={styles.title}>
        <p>Bachelor of Engineering - Major in Computer Engineering Technology</p>
        </div>
    </div>
    )
}
export default StudentHeader;
