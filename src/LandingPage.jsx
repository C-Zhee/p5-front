import React from 'react';
import { useNavigate } from 'react-router-dom';
import Y1 from './assets/Y1.webp';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="landing-container">
            <a href="/login">
                <h1>Click Me! </h1>
                <h1>Or Anywhere on the image 😊</h1>
                <img src={Y1} alt="Baek Gif" onClick={handleClick} height="700px" width="auto" />
            </a>
        </div>
    );
}

export default LandingPage;