import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    
    <nav className='nav'>
        <div className='logo'>
            <img src='/images/logo2.png' alt='logo_img'/>
        </div>


        <ul>
            <li> Home </li>
            <li> About </li>
            <li> Contact </li>
        </ul>
    </nav>
  );
};

export default NavBar