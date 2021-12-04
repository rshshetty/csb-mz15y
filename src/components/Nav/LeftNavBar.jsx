import React from "react";

const LeftNavBar = () => {
  return (
    <div className="LeftNav">
      <li style={{ flexDirection: "row" }}>
        <img className="BrandName" src="/navimg/BrandName.png" alt="flipkart" />
        <span className="explore">
          <p>Explore</p>
          <span>
            <p style={{ color: "gold" }}>Plus</p>
          </span>
          <span>
            <img className="star" src="/navimg/GoldenStar.png" alt="" />
          </span>
        </span>
      </li>
      <li className="search">
        <input
          type="text"
          className="searchinput"
          placeholder="search for products brands and more"
        />
        <img className="searchicon" src="/navimg/search.png" alt="" />
      </li>
    </div>
  );
};
export default LeftNavBar;
