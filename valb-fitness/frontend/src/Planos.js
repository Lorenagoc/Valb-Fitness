//3rd part imports
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import BannerImage from "./assets/academiahome.jpg";
import "./styles/Planos.css";
//import useFetch from "../hooks/useFetch";

/*
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
      <p> A partir de R${price}</p>
    </div>
  );
} */

const Planos = () => {
  return (
   
    <div className="menu">
        
        <h1 className="menuTitle">Musculação </h1>
          <div> Oi </div>
        <h1 className="menuTitle">Ritmos </h1>
          
        <h1 className="menuTitle">Spinning </h1>

        <h1 className="menuTitle">Crossfit </h1>

        <h1 className="menuTitle">Natação </h1>
        
    </div>

  );
}

export default Planos;