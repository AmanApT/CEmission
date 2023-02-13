import React, { useEffect } from 'react';

const Popup = () => {
  useEffect(() => {
    document.getElementById("open-popup-btn").addEventListener("click", function() {
      document.getElementsByClassName("popup")[0].classList.add("active");
      console.log("Log ho rha hun mai ");
    });

    document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
      document.getElementsByClassName("popup")[0].classList.remove("active");
    });
  }, []);

  return (
  <div>


<div class="popup center">
       

       <div class="title">Your Carbon Emission history</div>
       <div class="description">
         <h2>You emitted lots of carbon emission, jhaant bhar ki bhi sharm aati hai ? </h2>
       </div>
       <div class="dismiss-btn">
         <button id="dismiss-popup-btn">Dismiss</button>
       </div>
     </div>
 
     <div class="center">
       <button id="open-popup-btn">Show history</button>
     </div>
 

  </div>
  );
};

export default Popup;