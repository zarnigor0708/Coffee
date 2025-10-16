import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <div className="hero-overlay">
            <div className="hero-text">
                <h1>Freshly Brewed Coffee, Just form You</h1>
                <p>Experience the perfect cup every time at
                    <span>CoffeeHub</span>
                    <a href="#menu" className="btn">View Menu</a>
                </p>
            </div>
        </div>
    )
}

export default Home