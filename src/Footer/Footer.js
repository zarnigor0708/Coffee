import React from "react";
// img
import FaceBook from "../images/Facebook_logo.jpg"
import Instagram from "../images/Instagram_logo.jpg"
import Twitter from "../images/twitter_logo.jpg"
// css
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy CoffeeHub. All rights reserved By Mahmoud</p>
            <div className="social-links">
                <a href="#">
                    <img src={FaceBook} alt="FaceBook" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="#">
                    <img src={Twitter} alt="Twitter" />
                </a>
            </div>
        </div>
    )
}

export default Footer