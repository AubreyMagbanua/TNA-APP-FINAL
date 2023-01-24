import styles from "./Campus.module.css";
// import Button from '@mui/material/Button';

import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';

const Campus = () => {
    return (
    <div className={styles.container}>
        <h1> &nbsp; </h1>
        <h1> &nbsp; </h1>
        <h2>TUP Campuses</h2>
        <hr/>
        <div className={styles.box}>

        <div className={styles.card}>
            <div className={styles.image}>
                <img src="./images/manila-campus.png" alt="manila"/>
            </div>
            <div className={styles.details}>
                <div className={styles.center}>
                    <h1>Manila Campus</h1>
                    <p>Ayala Blvd, Ermita, Manila, 1000 Metro Manila</p>
                    <p className={styles.deets}><EmailIcon sx={{ fontSize: 18 }} /> &nbsp; tup@tup.edu.ph </p>
                    <p className={styles.deets}><LanguageIcon sx={{ fontSize: 18 }} /> &nbsp; www.tup.edu.ph </p>
                    <p className={styles.deets}><CallIcon sx={{ fontSize: 18 }} /> &nbsp; 301.3001 </p>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.image}>
                <img src="./images/cavite-campus.png" alt="cavite"/>
            </div>
            <div className={styles.details}>
                <div className={styles.center}>
                    <h1>Cavite Campus</h1>
                    <p>Carlos Trinidad Ave, Salawag, Dasmariñas, Cavite</p>
                    <p className={styles.deets}><EmailIcon sx={{ fontSize: 18 }} /> &nbsp; cavite@tup.edu.ph </p>
                    <p className={styles.deets}><LanguageIcon sx={{ fontSize: 18 }} /> &nbsp; www.tupcavite.edu.ph </p>
                    <p className={styles.deets}><CallIcon sx={{ fontSize: 18 }} /> &nbsp; 416.4920 </p>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.image}>
                <img src="./images/taguig-campus.png" alt="taguig"/>
            </div>
            <div className={styles.details}>
                <div className={styles.center}>
                    <h1>Taguig Campus</h1>
                    <p>KM 14 East Service Road,  Western Bicutan, Taguig City</p>
                    <p className={styles.deets}><EmailIcon sx={{ fontSize: 18 }} /> &nbsp; taguig@tup.edu.ph </p>
                    <p className={styles.deets}><LanguageIcon sx={{ fontSize: 18 }} /> &nbsp; www.tupt.edu.ph </p>
                    <p className={styles.deets}><CallIcon sx={{ fontSize: 18 }} /> &nbsp; 823.2457 </p>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.image}>
                <img src="./images/visayas-campus.png" alt="visayas"/>
            </div>
            <div className={styles.details}>
                <div className={styles.center}>
                    <h1>Visayas Campus</h1>
                    <p>Capitan Sabi St, Talisay City, Negros Occidental</p>
                    <p className={styles.deets}><EmailIcon sx={{ fontSize: 18 }} /> &nbsp; visayas@tup.edu.ph </p>
                    <p className={styles.deets}><LanguageIcon sx={{ fontSize: 18 }} /> &nbsp; www.tupvisayas.edu.ph </p>
                    <p className={styles.deets}><CallIcon sx={{ fontSize: 18 }} /> &nbsp; (034) 495 3480 </p>
                </div>
            </div>
        </div>

        </div>
    </div>
    );
};
export default Campus;