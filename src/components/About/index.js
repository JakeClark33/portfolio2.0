import coverImage from "../../assets/cover/cover-image.png";
import React from 'react';

function About () {
    return (
        <header>
            <h1 id="about">Who am I?</h1>
            <img src= {coverImage} className="my-2" style={{ width: "96", height:"65"}} alt="cover"/>
            <div>
                <p>Thank you for taking the time to view my site.</p>
            </div>
        </header>
    );
    
}
    
 
export default About;