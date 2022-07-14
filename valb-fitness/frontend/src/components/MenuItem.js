import React from "react";
import useFetch from "../hooks/useFetch";

function MenuItem({ image, name, price }) {
  const {data: planos, isPending, error } = useFetch('http://localhost:3001/Planos');
  const handleHover = (e) => {
    e.preventDefault();
    console.log(planos)
    
  }
  return (
    <div className="menuItem" onMouseEnter={handleHover}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;