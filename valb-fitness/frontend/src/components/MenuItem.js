import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price }) {
  const {data: planos, isPending, error } = useFetch('http://localhost:3001/Planos');
  const handleHover = (e) => {
    e.preventDefault();
    console.log(planos)
    
  }
  return (
    <div className="menuItem" onMouseEnter={handleHover}>
      <Link to={"/"+name}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> A partir de R${price}</p>
      </Link>  
    </div>
  );
}

export default MenuItem;