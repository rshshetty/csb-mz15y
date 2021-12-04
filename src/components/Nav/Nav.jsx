import React from "react";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import "../../styles.css";

const Nav = () => {
  return (
    <article className="Nav">
      <nav className="navbar">
        <LeftNavBar />
        <RightNavBar />
      </nav>
    </article>
  );
};
export default Nav;
