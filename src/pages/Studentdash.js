// import './App.css';
import styles from "../components/Dashstudent.module.css";
import Header from '../components/Header';
import BasicTable2 from '../components/BasicTable2';
import SearchIcon from '@mui/icons-material/Search';
const Studentdash = () => {
  return (
    <div className="App">
      <Header />
        <div className={styles.container}>
            <div className={styles.search}>
                <input className={styles.input} type="date"></input>
                <button className={styles.icon}><SearchIcon sx={{ fontSize: 20}} /></button>
            </div>
        </div>

      <BasicTable2 />
    </div>
  )
}

export default Studentdash;
