import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="section">
        <div className="hero-section">
          <div className="col-left">
            <h1 className="hero-title">WE</h1>
            <h1 className="hero-title">ARE</h1>
          </div>
          <div className="col-right">
            <h2 className="hero-subtitle">THINKERS</h2>
            <h2 className="hero-subtitle">CREATORS</h2>
            <h2 className="hero-subtitle">DOERS</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
