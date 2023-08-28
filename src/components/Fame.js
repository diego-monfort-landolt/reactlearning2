import React, {useState} from "react";
import './fame.css';


const Fame = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime]= useState(time);


    const upDateTime =()=> {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(upDateTime, 1000);

    
    return(
     <div className="fame-container">
          <h4>{currentTime}</h4>      
     </div>

    );
}
export default Fame;