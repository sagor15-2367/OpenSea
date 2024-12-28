import React from "react";
import "../Styles/Trending.css";
import arrow from "../assets/Trend.png"

const Trending = () => {
  return (
    <div className="mainTrending">
      <div className="Trending">
        <button>Trending</button>
        <button>Top</button>
      </div>
      <div className="secondTrending">
        <div className="Hours">
          <button type="button">1h</button>
          <button type="button">12h</button>
          <button type="button">24h</button>
          <button type="button">1d</button>
          <button type="button">7d</button>
        </div>
        <div className="chains">
          <button type="button">All chains</button>
          <img src={arrow} alt="" />
        </div>
        <div>
          <button type="button">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
