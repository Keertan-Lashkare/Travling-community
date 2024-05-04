import React from 'react';
// import '../css/sidebar.css';
import '../scss/sidebar.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import sugg from '../images/sug.png';

export default function Sidebar() {
  
  const [showButton, setShowButton] = useState("hidden");

  const toggleButton = () => {
      if(showButton=="hidden"){
        setShowButton("visible");
      }
      else if(showButton=="visible"){
        setShowButton("hidden");
      }
  };
  return (
    
    <div> <div className="home-menu">
    <div className="menu-bar">
      <ul className="ul border ul-list-menu">
        <li> <Link className='sidebar-icon'  name='home' to='home'> Home</Link>  </li>
        <li><Link  className='sidebar-icon' name='Journey' to='/Journey'>Journey</Link>  </li>
        <li> <Link className='sidebar-icon'  name='create' to='/create'>Create Post</Link> </li>
        <li><Link  className='sidebar-icon' name='profile' to='/profile'>profile</Link> </li>

        
        <div className='user_btn' style={{ visibility:showButton }}>
          <div className='singin_btn' ><Link className='link' name='login' key='login' to='/login'>Sing In</Link></div>
        <div className='singup_btn'><Link className='link' name='singup' key='singup' to='/sing'>Sing Up</Link></div>
       
        </div>
        
        
        <div className="menu border">
            
          <a><i onClick={toggleButton} className="fa-solid fa-bars"></i></a>
   
         </div>
      </ul>

    </div>
  </div></div>
  )
}
