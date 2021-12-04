import React from "react";

const Filters = () => {
  return (
    <div className="Filter">
      <div className="price">
        <label htmlFor="price">price</label>
        <select name="price" id="price">
          <option value="asc">Low to High</option>
          <option value="dec">High to Low</option>
        </select>
      </div>
      <div className="brands">
        <h1>Brands</h1>
        <div className="brandcheck">
          <input type="checkbox" id="JOCKEY" value="JOCKEY" />
          <label htmlFor="TRIPR">TRIPR</label>
          <input type="checkbox" id="JOCKEY" value="JOCKEY" />
          <label htmlFor="JOCKEY">JOCKEY</label>
          <input type="checkbox" id="Me Craft" value="Me Craft" />
          <label htmlFor="Me Craft">Me CraftR</label>
        </div>
      </div>
      <button className="gender">men</button>
      <button className="gender">women</button>
      <select name="color" id="color" price>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="green">Green</option>
        <option value="grey">grey</option>
        <option value="blue">blue</option>
      </select>
    </div>
  );
};
export default Filters;
