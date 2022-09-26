import React from 'react'
import logo from './images/download.png'
import facebook from './images/icon-facebook.svg';
import twitter  from './images/icon-twitter.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
         <img className='footer_img1' src={logo} alt="" />
          <div className='footer_a3'>
          <a href="#">Contact <i style={{width: "16px"}}><FontAwesomeIcon icon={faPhoneSquare} /></i>   2348082350194</a>
          </div>
    </div>
  )
}

export default Footer