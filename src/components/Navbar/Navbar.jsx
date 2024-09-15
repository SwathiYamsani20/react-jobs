import React from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";
import {NavLink} from "react-router-dom"
function isOpen(){
  return {
    backgroundColor:'red'
  };
}
function Navbar() {
  const linkClass=({isActive})=>
isActive? {isOpen}:null;

  return (
    <div className='nav-container'>
        <div className='title-img'>
        <img src={logo} alt='logo' className='logo' />
<h2 style={{color:"white"}}>
    React Jobs
</h2>
</div>
<div className='links'>
<NavLink to='/'className={linkClass} style={{color:"white"}}>Home</NavLink>
<NavLink to='/jobs'style={{color:"white"}}>Jobs</NavLink>
<NavLink to='/add-job'style={{color:"white"}}>Add Job</NavLink>

</div>


    </div>
  )
}

export default Navbar