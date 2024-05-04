import React from 'react';
// import '../css/profile.css';
import '../scss/profile.scss';

export default async function Profile() {
    try {
        const res=await fetch("/profile",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
            

        })
        const ress=await res.json();
             console.log(ress);
    } catch (error) {
        console.log("error")
    }

    


  return (
    <>
        <div className="profile-container">
        <div className="profile-header">
            <div className="profile-picture">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="Profile Picture"/>
            </div>
            <div className="info">
                <div className="profile-info">
                    <h1 className="profile-name">Keertan Lashkare</h1>
                    <button className="edit-profile-button">Edit Profile</button>
                </div>
                <p className="profile-stats">
                    <button className="stat-button">
                        <span className="label">0 Travel</span>
                    </button>
                    <button className="stat-button">
                        <span className="label">0 Followers</span>
                    </button>
                    <button className="stat-button">
                        <span className="label">0 Following</span>
                    </button>
                </p>

                <div className="profile-bio" type="text" placeholder="Bio...">Bio...</div>   
            </div>
        </div>

        <hr className="divider"/>

        <div className="itinerary-container">
            <div className="itinerary-item">
                <img src="https://imgs.search.brave.com/ypXUzCpT6j6qL3dYH44jC3SCFrNkET2UwhNKXzxA5pQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTIvQW1ib2xpLTQw/MHgyMjkuanBn" alt="Itinerary Image 1"/>
            </div>
            <div className="itinerary-item">
                <img src="https://imgs.search.brave.com/2Ujr79koQAMufmInmNnU8WKOGokMKnqx9D8y36UzoNA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cmlzbS1vZi1p/bmRpYS5jb20vcGlj/dHVyZXMvdHJhdmVs/X2d1aWRlL21hbmFs/aS00NzAuanBlZw" alt="Itinerary Image 2"/>
            </div>
            <div className="itinerary-item">
                <img src="https://imgs.search.brave.com/5ewYMEoQfM4Mt63y7xrTRyPml0eSwSDn0LCrEOUJlxg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ2/NDU1OTQyL3Bob3Rv/L2dhdGUtdG8taW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUdmbUtNaTFO/dHRXdFVISXRkZmZM/UlBaeHoxcmVpelNm/enA4TmtwN2NJelU9" alt="Itinerary Image 3"/>
            </div>
        </div>
    </div>
    </>
  )
}
