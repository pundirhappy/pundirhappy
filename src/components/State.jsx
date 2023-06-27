import React, { useState, useEffect } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './Navbar.css';

const State = () => {

 const [value , setValue] = useState(0)
 const [alarmTime, setAlarmTime] = useState('');
 const [currentTime, setCurrentTime] = useState('');

 useEffect(() => {
   const timer = setInterval(() => {
     setCurrentTime(getCurrentTime());
     checkAlarm();
   }, 1000);

   return () => {
     clearInterval(timer);
   };
 }, []);

 const getCurrentTime = () => {
   const now = new Date();
   const hours = now.getHours().toString().padStart(2, '0');
   const minutes = now.getMinutes().toString().padStart(2, '0');
   const seconds = now.getSeconds().toString().padStart(2, '0');
   return `${hours}:${minutes}:${seconds}`;
 };

 const checkAlarm = () => {
   if (alarmTime === currentTime) {
     playAlarmSound();
   }
 };

 const playAlarmSound = () => {
   // Replace the alarm sound source with your preferred audio file
   const audio = new Audio('path_to_your_alarm_sound.mp3');
   audio.play();
 };

 const handleAlarmChange = (e) => {
   setAlarmTime(e.target.value);
 };


//  start code start 
  
 const add = () => {
    if (value < 10) {
    setValue (value +1);
 }
};


const sub = () => {
    if (value > 0) {
    setValue (value -1);
    }
};
                                 //  end 
  return (
 <> 


<div className="Apps">
      <h1>Alarm App</h1>
      <div className="clock">
        <AiOutlineClockCircle />
        <span>{currentTime}</span>
      </div>
      <div className="alarm-form">
        <input
          type="time"
          value={alarmTime}
          onChange={handleAlarmChange}
        />
      </div>
    </div>
                                                         {/* state start  */}


 <center>
    <div>

 <h1> {value} </h1>
 <br/>
        <button className='btn btn-warning btn-lg' onClick={add}> Add  </button> &nbsp;&nbsp;&nbsp;
        <button className='btn btn-danger btn-lg' onClick={sub}> sub  </button>
        </div>
        </center>

        </>
  )
};

export default State;