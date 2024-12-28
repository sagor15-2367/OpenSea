import React from "react";
import "../Styles/Ranking.css";
import logo from "../assets/react.svg";

const Ranking = () => {
  return (
    <div className="rank">
      <div className="rankTitle">
        <p>Rank</p>
        <p>Collection</p>
        <p>Floor Price</p>
        <p>Volume</p>
      </div>
      <div className="row"></div>
      <div>
        <ol className="orderList">
          <li>
            <p>1</p>
            <div className="logoBox">
              <img src={logo} alt="" />
              <p>Sproto pepes</p>
            </div>
            <p className="p">00.2 ETH</p>
            <p>89 ETH</p>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div>
        <ol className="orderList">
          <li>
            <p>2</p>
            <div className="logoBox">
              <img src={logo} alt="" />
              <p>DakieBase</p>
            </div>
            <p className="p">00.14 ETH</p>
            <p>41 ETH</p>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div>
        <ol className="orderList">
          <li>
            <p>3</p>
            <div className="logoBox">
              <img src={logo} alt="" />
              <p>Renga</p>
            </div>
            <p className="p">00.45 ETH</p>
            <p>99 ETH</p>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div>
        <ol className="orderList">
          <li>
            <p>4</p>
            <div className="logoBox">
              <img src={logo} alt="" />
              <p>Punks2k</p>
            </div>
            <p className="p">00.12 ETH</p>
            <p>9 ETH</p>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div>
        <ol className="orderList">
          <li>
            <p>5</p>
            <div className="logoBox">
              <img src={logo} alt="" />
              <p>pepes</p>
            </div>
            <p className="p">00.32 ETH</p>
            <p>89 ETH</p>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  );
};

export default Ranking;
