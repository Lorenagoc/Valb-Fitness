import React from "react";
import { Link } from "react-router-dom";

function Item({ image, name, enName }) {
  return (
      <div className="item">
        <Link to={"/"+enName}>
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <h2> {name} </h2>
        </Link>
      </div>
    
  );
}

export default Item;