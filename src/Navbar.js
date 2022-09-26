import React from 'react'
import logo from './images/jadeklogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><img className='navimg' src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav navitems ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Contact <i style={{width: "16px", color:"green", paddingRight:"3px"}}><FontAwesomeIcon icon={faPhoneSquare} /></i>   2348082350194</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar