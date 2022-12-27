import React, { useState } from 'react';
import './Timer.css';


const Timer = (props) => {
    let [days, setDays]=useState()
    let [hours, setHours]=useState()
    let [minutes, setMinutes]=useState()
    let [seconds, setSeconds]=useState()
    let countDownDate = new Date("Apr 10, 2023 15:37:25").getTime();

    let x = setInterval(function() {    

    let now = new Date().getTime();

    let distance = countDownDate - now;

    setDays( days=Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours( hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) )
    setMinutes( minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(seconds=Math.floor((distance % (1000 * 60)) / 1000))

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    }, 1000);
    
    return ( 
        <div className="timer">
            <div className="timer-list">
                <h4>{days}</h4>
                <p>:</p>
                <h4>{hours}</h4>
                <p>:</p>
                <h4>{minutes}</h4>
                <p>:</p>
                <h4>{seconds}</h4>
            </div>
               
            <div className="timer--text">
                <p>Días</p>
                <div className="timer--text-n">
                    <p>Horas</p>
                    <p>Minutos</p>
                </div>
                <p>Segundos</p>
            </div>
        </div>
     );
}
 
export default Timer;