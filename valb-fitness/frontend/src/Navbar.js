//3rd part imports

import React, { useState } from 'react';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar({ login }) {
  const [openLinks, setOpenLinks] = useState(false);
  console.log('login', login);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} />
        <h1> Valb Fitness </h1>
        <div className='hiddenLinks'>
          <Link to='/'> Home </Link>
          <Link to='/Team'> Login </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        {login === 'true' ? <Link to='/Team'> Login </Link> : <></>}

        <button onClick={toggleNavbar}></button>
      </div>
    </div>
  );
}

export default Navbar;
