import React from 'react';
import NavLinks from './common/NavLinks';
import SocialLinks from './common/SocialLinks';
import "./HomePage.css";
import  coverImage from "./img/cover.svg";

function HomePage() {
    return (
        <>
        <div className="navbar">
            <h3>AIA</h3>
            <NavLinks />
            <SocialLinks />
        </div>
        <div className="main">
            <div className="main_words">
                <h1>Hi, I am Ahadov Ilhomjon.</h1>
                <h1>I am a front-end developer.</h1>
                <p>I help businesses to attract more customers by building beautiful user interfaces. </p>
                <button>Let's talk</button>
                <button>Portfoilo</button>
            </div>
            <div className="main_image">
                <img src={coverImage} alt="a programmer"/> 
            </div>
        </div>
        </>
    )
}

export default HomePage;
