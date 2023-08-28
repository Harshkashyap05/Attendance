import React from 'react';
import "../styles/Header.css";
import logo from '../assets/logo.jpg';
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1>Attendance Management System</h1>
                </div>
                <div className='user'>
                    <FaUser className='iconss' />
                </div>
            </div>
        </>
    );
};

export default Header;
