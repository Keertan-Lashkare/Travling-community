import React from 'react';
// import '../css/suggetion_pg.css';
import '../scss/suggetion_pg.scss';

import bg_pg from '../images/bg_pg.jpg';


export default function Suggetion_api() {
  return (
    <div>
        <div className="contain_box">

        <div className="sugg">
        <div className="sugg_img"><img src={bg_pg} alt="suggetion place"  /></div> 
          <div className="sugg_info">
            <div className="sugg_name"><h1>koria </h1></div>
            <div className="sugg_add"><h3>addresss of place</h3></div>
          </div>
        </div>
        
        </div>


        <div className='buttom_aria'>
            <form className='sugg_box_btn'>
                <input type='text' className='user_serch'></input>
                <input type='button' placeholder='dfdf' className='submit_btn'></input>
            </form>
        </div>
        <div className="sugg_bg"></div>
    </div>
  )
}
