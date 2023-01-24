import styles from "./Dashadmin.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const Dashadmin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input className={styles.input} type="text"></input>
                <button className={styles.icon}><SearchIcon sx={{ fontSize: 20}} /></button>
                <select name="Course">
                    <option value="" hidden>Course</option>
                    <option value="1">BGT-AT</option>
                    <option value="2">BET-ET</option>
                    <option value="3">BET-EST</option>
                    <option value="4">BET-COET</option>
                    <option value="5">BET-CT</option>
                    <option value="6">BET-MT</option>
                    <option value="7">BET-AT</option>
                    <option value="8">BET-PPT</option>
                    <option value="9">BSIE-HE</option>
                    <option value="10">BSIE-IA</option>
                    <option value="11">BSIE-ICT</option>
                    <option value="12">BS-CE</option>
                    <option value="13">BS-EE</option>
                    <option value="14">BS-ME</option>
                </select>
            </div>
            <div className={styles.buttons}>
                <a href="/studentreg"><button className={styles.secondary}>Register</button></a>
            </div>
        </div>

    )
}
