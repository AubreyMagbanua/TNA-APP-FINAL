import React from 'react'
import Header from '../components/Header';
import styles from "../components/display.module.css";

function RenderImage({ data }) {
    return(    // Get the image data
        
        <div>
            <Header/>
            <div>
                <div>
                    <div>  
                        <h1 className={styles.text}>Caught On Camera </h1>
                    </div>                   
                </div>
               
                
            </div>
            
            {data.images.map(function(images){                
                let imagess = images['capture']['data'];
                
                // Convert into blob into string with charset=utf-8
                let image = "data:image/png;base64," + Buffer.from(imagess, 'base64').toString('utf-8');
                // string date and time
                let date_time = images['date_time'];
                // Render into HTML
                return (
                    <div>
                            
                        <div className={styles.container}>
                            <div>
                                <p> Motion Detected at: {date_time}</p>
                            </div>
                            <div>
                                <img src={image} alt=""  width="700" height="500" object-fit="cover" />
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
    const response = await fetch('http://172.16.22.225:3000/image');

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
