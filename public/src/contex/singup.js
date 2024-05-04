import { sing_contex } from "./contex";
import { useState } from "react";
import React from 'react'

export default function Singupp(props) {
    const singD={
        username:String,
        password:String,
        email:String
    }
    const [sing,setsing]=useState(singD);

   async function singup(){
        console.log(sing.username);
        console.log(sing.password);
        console.log(sing.email);


        const res= await fetch("/sing",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(sing)
        })

        
        const ress= await res.json();
        console.log(ress);
    }
    
  return (
    <sing_contex.Provider value={{sing,setsing,singup}}>
        {props.children}
    </sing_contex.Provider>
  )
}
