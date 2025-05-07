import React from "react";
import "./Footer.css";
import whiteCross from "../../assets/imgs/white-cross.png";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <img src={whiteCross} alt="white-cross" className="white-cross" />
        <div className="footer-left">
            <h6>Seg. a Sex.</h6>
        </div>
        <div className="footer-right">
            <h3>Subscrever a Newsletter</h3>
        </div>
      </section>
    </>
  );
};

export default Footer;
