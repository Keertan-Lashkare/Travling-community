import React from 'react';
import logo from '../images/black1.jpg';
import logo1 from '../images/black.jpeg';
// import '../css/home_content.css';
import '../scss/home_content.scss';



export default function Home_content() {
  return (
    
    <div className='home_content'>
    <div className='card'>

    <div className='card_r1'>
       <img src={logo1} className='card_img'></img>
        <h1 className='card_name'>Keertan lashkare</h1>
        </div>
        <div className='card_r2'>
            <img src={logo1} className='card_cimg'></img>
        </div>
        <div className='card_r3'>
           <a className='card_like'><i class="fa-regular fa-heart"></i></a>
            <a className='card_comment'><i class="fa-regular fa-comment"></i></a>
            <a className='card_join'><button class="blank-btn">join</button></a>
        </div>
        <div className='plan-box'><h3>me kala ghoda festival me jane ki soch kara hu so any one intreseted to go whith me ?</h3></div>
    </div>
        
    </div>
  )
}
