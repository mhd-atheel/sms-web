import React from 'react'
import '../css/Navbar.css'
import profileImage from '../images/profile.png'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <div className='MainNavRow'>
      <div className='logo'>
     {/* <img src={logo} className=''  /> */}
     <h1>EASYSCHOOL</h1>
      </div>
      <div className='navRow'>
        <div className='circle'>
        </div>
        <h6> Admin</h6>
        <img src={profileImage} className='profileImage'  />
        
        <div className='navcolumn'>
            <div className='navbarName'>Mohamed Atheel</div>
            <div className='navEmail'>aathilmazz1234@gmail.com</div>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar