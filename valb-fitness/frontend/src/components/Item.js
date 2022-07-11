import React from "react";
import { Link } from "react-router-dom";

function Item({ image, name }) {
  return (
      <div className="item">
        <Link to={"/"+name}>
          <div style={{ backgroundImage: `url(${image})` }}></div>
        </Link>
      </div>
    
  );
}

export default Item;