import React from 'react'
import Header from '../components/Header';
import styles from "../components/display.module.css";

function RenderImage({ data }) {
    return(    // Get the image data
        
        <div>
            <Header/>
            
            {data.images.map(function(images){                
                let imagess = images['capture']['data'];
                
                // Convert into blob into string with charset=utf-8
                let image = "data:image/png;base64," + Buffer.from(imagess, 'base64').toString('utf-8');
                // string date and time
                let date_time = images['date_time'];
                // Render into HTML
                return (

                    
                    <div className={styles.dash}>
                        <div className={styles.box}>
                            <div>
                                <p className={styles.info}> Motion Detected at: {date_time}</p>

                                <img src={image} alt=""  width="800" height="500" />
                            </div>
                            
                        
                        </div>

                        
                    
                    </div>
                        )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from the server
    const response = await fetch('http://192.168.1.8/:3000/image');

    // Get the json response
    const data = await response.json();
    if ( !data ) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
    }
}

export default RenderImage;
