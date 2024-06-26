import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
       <div className='city'>
         <ul>
            <Link to="/React"><li><b>HOME</b></li></Link>
            <Link to="/About"><li><b>ABOUT</b></li></Link>
            <Link to="/Services"><li><b>SERVICES</b></li></Link>
            <Link to="/Contect"><li><b>CONTACT</b></li></Link>
         </ul>
      </div>
  )
}

export default Header;