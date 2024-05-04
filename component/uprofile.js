import React, { useState } from 'react';
// import '../css/uprofile.css';
import '../scss/uprofile.scss';

export default function Uprofile() {
  
        function previewImage(event) {
        setsing({...sing,[event.target.name]:event.target.value});  
          const file = event.target.files[0];
          const reader = new FileReader();
  
          reader.onload = function () {
            const profilePicture = document.getElementById("profile-picture");
            profilePicture.innerHTML = ""; // Clear existing image if any
  
            const img = document.createElement("img");
            img.src = reader.result;
            img.alt = "Profile Picture";
            profilePicture.appendChild(img);
          };
  
          if (file) {
            reader.readAsDataURL(file);
          }
        }
        
        const [sing,setsing]=useState({
            name:String,
            image:String,
            bio:String
        });

       async function upro(event){
            event.preventDefault();
            console.log(sing.name);
            console.log(sing.image);
            console.log(sing.bio);
            
    
    
            const res= await fetch("/uprofile",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:sing.name,image:sing.image,bio:sing.bio})
            })
    
            
            const ress= await res.json();
            console.log(ress);
        }

        const chan=(e)=>{
            setsing({...sing,[e.target.name]:e.target.value});  
          }









      
  return (
    <>
         <div class="profile-container">
        <div class="profile-header">
          <div class="container">
            <div class="profile-picture" id="profile-picture">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                alt=""
              />
            </div>
            <label for="file-upload">Edit profile picture</label>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onchange={previewImage}
            />
          </div>
          <div class="info">
            <div class="profile-info">
              <h1 class="profile-name" id="profile-name">
                <input type="text" name='name' placeholder="change username" onchange={chan}/>
              </h1>
              <button class="edit-profile-button" onclick={upro}>
                Save Changes
              </button>
            </div>
            <p class="profile-stats">
              <button class="stat-button">
                <span class="label">0 Travel</span>
              </button>
              <button class="stat-button">
                <span class="label">0 Followers</span>
              </button>
              <button class="stat-button">
                <span class="label">0 Following</span>
              </button>
            </p>
            <textarea
              rows="4"
              cols="50"
              id="bio"
              name="bio"
              maxlength="100"
              onchange={chan}
            ></textarea>
          </div>
        </div>
  
        <hr class="divider" />
   
        <div class="itinerary-container">
          <div class="itinerary-item">
            <img
              src="https://imgs.search.brave.com/ypXUzCpT6j6qL3dYH44jC3SCFrNkET2UwhNKXzxA5pQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTIvQW1ib2xpLTQw/MHgyMjkuanBn"
              alt="Itinerary Image 1"
            />
          </div>
          <div class="itinerary-item">
            <img
              src="https://imgs.search.brave.com/2Ujr79koQAMufmInmNnU8WKOGokMKnqx9D8y36UzoNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cmlzbS1vZi1p/bmRpYS5jb20vcGlj/dHVyZXMvdHJhdmVs/X2d1aWRlL21hbmFs/aS00NzAuanBlZw"
              alt="Itinerary Image 2"
            />
          </div>
          <div class="itinerary-item">
            <img
              src="https://imgs.search.brave.com/5ewYMEoQfM4Mt63y7xrTRyPml0eSwSDn0LCrEOUJlxg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ2/NDU1OTQyL3Bob3Rv/L2dhdGUtdG8taW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUdmbUtNaTFO/dHRXdFVISXRkZmZM/UlBaeHoxcmVpelNm/enA4TmtwN2NJelU9"
              alt="Itinerary Image 3"
            />
          </div> 
         </div>
        </div>
     
      
    </>
  )
}
