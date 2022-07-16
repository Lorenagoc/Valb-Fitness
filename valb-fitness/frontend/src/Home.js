//3rd part imports
import React from "react";
import "./styles/Home.css";
import  MenuItem from "./components/MenuItem.js";
import { MenuList } from "./helpers/MenuList.js";

const Home = () => {
  return (
   
    <div className="menu">
        
        <h1 className="menuTitle">Nossas modalidades </h1>
        
        <div className="menuList">
            {MenuList.map((menuItem, key) => {
            return (
                <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                enName={menuItem.enName}
                price={menuItem.price}
                />
             );
          })}
      </div>
    </div>

  );
}

export default Home;