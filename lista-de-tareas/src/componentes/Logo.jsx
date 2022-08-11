import React from "react";
import logo from '../images/fab-btz-logo.png';
import '../styles/Logo.css';

function Logo() {
  return (
    <div className='logo-container'>
      <img
        src={logo}
        className='logo'
        alt='Logo de FAB-BTZ'
      />
    </div>
  )
}
export default Logo;