import React, { useContext } from 'react';
// import '../css/login.css';
import {Link} from 'react-router-dom';
import { login_contex } from '../contex/contex';
import '../scss/login.scss';


export default function Login(props) {
    const b=useContext(login_contex);
    const {user,setuser,logi}=b;
    
    console.log(user);

    const chann=(e)=>{
      try {
        setuser({...user,[e.target.name]:e.target.value})
      } catch (error) {
        console.log("erroororor");
      }
      

    }
    function sub(event) {
      event.preventDefault();
      logi();
    } 
    


    

  

  
  return (
    <div className='outt'>
    <div className='out'>
        <form className='in'onSubmit={sub}>
        <input type='text' placeholder='Username' className='user' name='username' onChange={chann}/>
        <input type='password' placeholder='Password' className='pass' name='password'  onChange={chann} />
        <input type='submit' className='btn' value='Login'/>

        </form>
        </div>
    </div>
  )
}
