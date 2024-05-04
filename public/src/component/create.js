import React from 'react';
//import '../css/create.css';
import '../scss/create.scss';

export default function Create() {

    function displayImage(event) {
        var image = document.getElementById('uploaded-image');
        image.src = URL.createObjectURL(event.target.files[0]);
    }

    

  return (
    <div className="container">
          <div className="image-container">    
        <div id="image-container">
            <img id="uploaded-image" />
        </div>
        <input type="file" id="image-input" accept="image/*" onChange={displayImage}/>
        <span><label for="image-input" id="choose-file-btn" onChange={displayImage}>Upload image</label></span>
          </div>
          <div className="dis">
            <span> Journy Plan:</span>
            <textarea id="description" placeholder="Enter image description..."></textarea>
            <span>End date:</span>
            <input type="date" id="end-date" placeholder="End Date" />
          </div>  
    </div>
  )
}
