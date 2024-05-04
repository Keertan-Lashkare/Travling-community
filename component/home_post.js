import React from 'react';
import logo from '../images/black1.jpg';
import logo1 from '../images/black.jpeg';
// import '../css/home_post.css';
import '../scss/home_post.scss';



export default function Home_post() {
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
            <div className='card_mention'>
            <img src={logo1} className='mention_img1'></img>
            <img src={logo1} className='mention_img1'></img>
            <img src={logo1} className='mention_img1'></img>
            <img src={logo1} className='mention_img1'></img>
            <img src={logo1} className='mention_img1'></img>
            
             
            
              
             

            </div>
            
            
        </div>
       
       
    </div>
        
    </div>
  )
}
