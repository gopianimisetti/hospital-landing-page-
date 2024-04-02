
import React from 'react';
import Veer from "./care-hospital-logo.jpg";

import './submit.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Submit = () => {
    const storedAllFormData = JSON.parse(sessionStorage.getItem('allFormData'));
    const latestFormData = storedAllFormData[storedAllFormData.length - 1]; 

    const navigate=useNavigate();
    const handleRedirect=()=>{
        navigate('/')
    }

    return (
        <>
            
            <div className="submit-container">
                <img src={Veer} className="hospital-logo" alt='Hospital Logo' />
                <div className="content">
                    <h2>Appointment Booked Successfully</h2>
                    <p><strong>Appointment Time:</strong> {latestFormData.time}</p>
                    <p><strong>Appointment Date:</strong> {latestFormData.date}</p>
                    <h3>Please Reach at least 30 Minutes Before Appointment Time</h3>
                    <p>Thank You</p>
                    <Button onClick={handleRedirect} variant="primary">Back to Home</Button>
                </div>
            </div>
        </>
    );
};

export default Submit;


