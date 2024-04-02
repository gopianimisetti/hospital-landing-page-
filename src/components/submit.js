
import React from 'react';
import Veer from "./care-hospital-logo.jpg";
import Navbarr from './Navbar';
import './submit.css';

const Submit = () => {
    const storedAllFormData = JSON.parse(localStorage.getItem('allFormData'));
    const latestFormData = storedAllFormData[storedAllFormData.length - 1]; 

    return (
        <>
            <Navbarr />
            <div className="submit-container">
                <img src={Veer} className="hospital-logo" alt='Hospital Logo' />
                <div className="content">
                    <h2>Appointment Booked Successfully</h2>
                    <p><strong>Appointment Time:</strong> {latestFormData.time}</p>
                    <p><strong>Appointment Date:</strong> {latestFormData.date}</p>
                    <h3>Please Reach at least 30 Minutes Before Appointment Time</h3>
                    <p>Thank You</p>
                </div>
            </div>
        </>
    );
};

export default Submit;


