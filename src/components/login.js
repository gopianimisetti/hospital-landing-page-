import React, { useState } from 'react';
import Veer from "./care-hospital-logo.jpg";
import './login.css';
import { useNavigate } from 'react-router-dom';
import Navbarr from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => { // Receive onLogin as a prop
    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleNumber = (e) => {
        setMobileNumber(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mobileNumber === '7382664563' && password === 'Nagagopi@123') {
            toast.success('Hello Doctor Your Login is  Succesfull');
            onLogin(); // Call onLogin function to update login state
            navigate('/patientdetails');
        } else {
            toast.error(' Hello Doctor Please enter valid credentials.');
        }

        setMobileNumber('');
        setPassword('');
    };

    return (
        <>
            <Navbarr />
            <div className="login-container">
                <img src={Veer} className="hospital-logo" alt="Hospital Logo" />
                <h2> Doctor Login</h2>
                <h6>For success login please use below credentials</h6>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="tel"
                            placeholder="7382664563(use this number)"
                            value={mobileNumber}
                            onChange={handleNumber}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Nagagopi@123(use this password)*"
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    <button type="submit"  className="sign-in-button">SIGN IN</button>
                </form>
            </div>
        </>
    );
};

export default Login;

