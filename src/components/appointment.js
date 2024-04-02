
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarr from './Navbar';
import Veer from "./care-hospital-logo.jpg";
import './appointment.css';

const Appointment = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ patientName: '', phoneNumber: '', patientAge: '', gender: '', time: '', date: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (formData.patientName === "" || formData.phoneNumber === "" || formData.patientAge === "" || formData.gender === "" || formData.time === "" || formData.date === "") {
            toast.error("Please fill in all fields");
        } else {
            const allFormData = JSON.parse(sessionStorage.getItem('allFormData')) || [];
            allFormData.push(formData);
            sessionStorage.setItem('allFormData', JSON.stringify(allFormData));
            toast.success("Appointment booked successfully");
            navigate('/submit');
        }
    };

    return (
        <>
            <Navbarr />
            <div className='appointment-container'>
                <img src={Veer} className='hospital-logo' alt='Hospital Logo' />
                <div className='form-container'>
                    <label className='input-label'>Patient Name:</label>
                    <input type='text' name='patientName' value={formData.patientName} onChange={handleChange} className='input-field' placeholder='Enter patient name' />

                    <label className='input-label'>Phone Number:</label>
                    <input type='tel' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className='input-field' placeholder='Enter 10 digit mobile number' />

                    <label className='input-label'>Patient Age:</label>
                    <input type='number' name='patientAge' value={formData.patientAge} onChange={handleChange} className='input-field' placeholder='Enter patient age' />

                    <div className='gender-container'>
                        <label className='input-label'>Gender:</label>
                        <div className='radio-group'>
                            <input type='radio' name='gender' value='male' onChange={handleChange} className='radio-input' /><span className='radio-label'>Male</span>
                            <input type='radio' name='gender' value='female' onChange={handleChange} className='radio-input' /><span className='radio-label'>Female</span>
                        </div>
                    </div>

                    <label className='input-label' htmlFor="timeInput">Select a time:</label>
                    <input type="time" id="timeInput" name="time" value={formData.time} onChange={handleChange} className='input-field' />

                    <label className='input-label'>Date:</label>
                    <input type='date' name='date' value={formData.date} onChange={handleChange} className='input-field' />

                    <center><button onClick={handleSubmit} className='submit-button'>Submit</button></center>
                </div>
            </div>
        </>
    );
};

export default Appointment;



