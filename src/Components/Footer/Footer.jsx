import React from 'react'
import './Footer.css'
import logo from '../Assets/shopping-bag.png';
import instagram_logo from '../Assets/instagram_logo.png'
import pinterest_logo from '../Assets/pinterest_logo.png'
import whatsapp_logo from '../Assets/whatsapp_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
       </div>

     <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     
     <div className='footer-social-icon'>
       <div className='footer-icon'>
           <img src={instagram_logo} alt=''/>
       </div>
       <div className='footer-icon'>
           <img src={pinterest_logo} alt=''/>
       </div>
       <div className='footer-icon'>
           <img src={whatsapp_logo} alt=''/>
       </div>
     </div>

     <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved.</p>
     </div>
    </div>
  )
}

export default Footer