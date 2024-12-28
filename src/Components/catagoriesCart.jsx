import React from "react";
import "../Styles/catagoriesCart.css";
import girl from "../assets/c5be73ae-2b7b-4ca9-b984-ab96a08f5d68.jpeg";
import man from "../assets/man-glasses-sits-front-computer-with-monitor-showing-computer-screen-with-man-front-him_662214-21078.jpg";

const catagoriesCart = () => {
  return (
    <div className="mainCartBox">
      <div className="cart">
        <h2>Man’s AI</h2>
        <p>Floor: 0.10 ETH</p>
        <img src={man} alt="" />
      </div>
      <div className="cart">
        <h2>Hairy_Girl</h2>
        <p>Floor: 0.10 ETH</p>
        <img src={girl} alt="#" />
      </div>
      <div className="cart">
        <h2>Man’s AI</h2>
        <p>Floor: 0.10 ETH</p>
        <img src={man} alt="" />
      </div>
      <div className="cart">
        <h2>Hairy_Girl</h2>
        <p>Floor: 0.10 ETH</p>
        <img src={girl} alt="" />
      </div>
      <div className="cart">
        <h2>Man’s AI</h2>
        <p>Floor: 0.10 ETH</p>
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default catagoriesCart;
