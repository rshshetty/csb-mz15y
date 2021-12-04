import React from "react";
import Filters from "../Filters/Filters";
import ProductPage from "../ProductPage/ProductPage";

const Main = () => {
  return (
    <div className="MainPage">
      <Filters />
      <ProductPage />
    </div>
  );
};

export default Main;
