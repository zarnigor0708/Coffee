import React from "react";
// img
import AboutImg from "../images/about.jpg"
// css
import "./About.css"

const About = () => {
    return (
        <div className="about container">
            <div className="about-text">
                <h2 className="section-title">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati, quas aspernatur tempore
                    suscipit, commodi nam, ipsa nulla a nemo quae aliquam mollitia odio! Sequi minus pariatur aspernatur cum
                    quod quidem! Unde vel, blanditiis pariatur earum error aliquam dolores molestiae ea minus
                    necessitatibus, aliquid, deleniti minima vero doloribus fugit numquam!</p>
                <a href="#contact" className="btn secondary-btn">Visit Us</a>
            </div>
            <div className="about-img">
                <img src={AboutImg} alt="About CoffeeHub" />
            </div>
        </div>
    )
}

export default About