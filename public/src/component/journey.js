import React from 'react';
import logo1 from '../images/black.jpeg';

export default async function Journey() {
  const res= await fetch('/login',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    }
   
    })


    const ress=await res.json();
    console.log(ress.result);
    let z=1;
    let a,b,c,d,e,f,g,h,i;

  return (
    <>
    {
     
      ress.map((item,x)=>{
        if(z<=9){
          switch(z) {
         case 1:
          a=item;
          z++;
          break;
         case 2:
           b=item;
           z++;
           break;
         case 3:
           c=item;
           z++;
           break;
         case 4:
            d=item;
            z++;
            break;
         case 5:
            e=item;
            z++;
            break;
         case 6:
            f=item;
            z++;
            break;
         case 7:
            g=item;
            z++;
            break;
         case 8:
            h=item;
            z++;
            break;
         case 9:
            i=item;
            z++;
         break;
     
   
        }   
            

        }
        else{

            <div class="container">
            <div class="grid-item"><img src={a} alt="" /></div>
            <div class="grid-item"><img src={b} alt="" /></div>
            <div class="grid-item"><img src={c} alt="" /></div>  
            <div class="grid-item"><img src={d} alt="" /></div>
            <div class="grid-item"><img src={e} alt="" /></div>
            <div class="grid-item"><img src={f} alt="" /></div>  
            <div class="grid-item"><img src={g} alt="" /></div>
            <div class="grid-item"><img src={h} alt="" /></div>
            <div class="grid-item"><img src={i} alt="" /></div>  
            </div>
            z=1;

        }
        

      })
    }
    
    </>
  )
}
