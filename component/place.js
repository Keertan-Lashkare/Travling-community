import React, { useState } from 'react';



export default function Place() {
        
      
        
        const [sing,setsing]=useState({
            name:String,
            image:String,
            des:String
        });

       async function upro(event){
            event.preventDefault();
            console.log(sing.name);
            console.log(sing.image);
            console.log(sing.des);
            
    
    
            const res= await fetch("/place",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({placename:sing.name,image:sing.image,des:sing.des})
            })
    
            
            const ress= await res.json();
            console.log(ress);
        }

        const chan=(e)=>{
            setsing({...sing,[e.target.name]:e.target.value});  
          }









      
  return (
    <>
         
              

          
                <input type="text" name='name' placeholder="place name" onchange={chan}/>
            
                <input
              type="file"
              name='image'
              accept="image/*"
              onchange={chan}
            />
            <input type='file' name='image' onchange={chan}></input>
            <textarea
              rows="4"
              cols="50"
              id="bio"
              name="bio"
              maxlength="100"
              onchange={chan}
            ></textarea>
         
           <button class="edit-profile-button" onclick={upro}>
                upload to database
              </button>
        
     
      
    </>
  )
}
