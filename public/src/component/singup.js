import React, { useContext } from 'react';
// import '../css/singup.css';
import '../scss/singup.scss';

import { sing_contex } from '../contex/contex';

export default function Sing() {
  const a=useContext(sing_contex);
  const {sing,setsing,singup}=a;

  const chan=(e)=>{
    setsing({...sing,[e.target.name]:e.target.value});  
  }
  function sin(event){
    event.preventDefault();
    singup();

  }
  return (
    <div className='outt'>
    <div className='out'>
        <form className='in' onSubmit={sin}>
        
        <input type='text' placeholder='Username' className='user' name='username' onChange={chan}/>
        <input type='password' placeholder='Password' className='pass' name='password' onChange={chan}/>            
       

        <input type='text' placeholder='Mobile / Email id' className='email' name='email' onChange={chan}/>
        <input type='submit' className='btn' value='Sing up'/>

        </form>
        </div>
    </div>
  )
}
