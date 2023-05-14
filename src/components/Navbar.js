import React from 'react'
import '../css/Navbar.css'
import profileImage from '../images/profile.png'
const Navbar = () => {
  return (
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
  )
}

export default Navbar