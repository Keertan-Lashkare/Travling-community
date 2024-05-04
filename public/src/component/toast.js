import React, { useState } from 'react';
// import '../css/toast.css';
import '../scss/toast.scss';

import { useEffect } from 'react';

export default function Toast(props) {


    
       const [show,hidden]=useState({display :"none"})
        const result=true;
        const message="hellow word";

      
       
        function showSuccessToast() {
            hidden({display:"grid"});
            setTimeout(function() {
                hidden({display:"none"});
            }, 3000);
        }
    
        function showErrorToast() {
            hidden({display:"grid"})
           
            setTimeout(function() {
                hidden({display:"none"});
            }, 3000);
        }
       
       
      
        useEffect(() => {

            if (result==true) {
                showSuccessToast();
            } else {
                showErrorToast();
            }
        
          
        },[]);
        



    function closeToast(button) {
        hidden({display:"none"});
    }


  return (
    <>
        <div class="wrapper">
    <div id="successToast" class="toast success" style={show}>
        <div class="container-1">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="container-2">
            <p>Success</p>
            <p>{message}</p>
        </div>
        <button onclick={closeToast(this)}>&times;</button>
    </div>
    <div id="errorToast" class="toast error" style={show}>
        <div class="container-1">
            <i class="fas fa-times-circle"></i>
        </div>
        <div class="container-2">
            <p>Error</p>
            <p>{message}</p>
        </div>
        <button onclick={closeToast(this)}>&times;</button>
    </div>
</div>
    </>
  )
}
