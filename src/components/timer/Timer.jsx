import React, { useState } from 'react';
import './Timer.css';


const Timer = (props) => {
    let [days, setDays]=useState()
    let [hours, setHours]=useState()
    let [minutes, setMinutes]=useState()
    let [seconds, setSeconds]=useState()
    let countDownDate = new Date("Apr 10, 2023 15:37:25").getTime();

    setInterval(function() {    

    let now = new Date().getTime();

    let distance = countDownDate - now;

    setDays( days=Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours( hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) )
    setMinutes( minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(seconds=Math.floor((distance % (1000 * 60)) / 1000)) 
    }, 1000);
    
    return ( 
        <div className="timer">
            <div className="timer-list">
                <div className="timer-center-list">
                    <div className="timer-center-h4-p">
                        <h4>{days}</h4>
                        <p>:</p>
                    </div>
                    <div className="timer-center-names">
                        <p>DÍAS</p>
                    </div>
                </div>
                <div className="timer-center-list">
                    <div className="timer-center-h4-p">
                        <h4>{hours}</h4>
                        <p>:</p>
                    </div>
                    <div className="timer-center-names">
                        <p>HRS</p>
                    </div>
                </div>
                <div className="timer-center-list">
                    <div className="timer-center-h4-p">
                        <h4>{minutes}</h4>
                        <p>:</p>
                    </div>
                    <div className="timer-center-names">
                        <p>MINS</p>
                    </div>
                </div>
                <div className="timer-center-list">
                    <div className="timer-center-h4-p-seconds">
                        <h4>{seconds}</h4>
                    </div>
                    <div className="timer-center-names-p">
                        <p>SEGS</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Timer;