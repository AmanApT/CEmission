import React, { useEffect } from "react";

const Dilogue = () => {
  useEffect(() => {
    document
      .getElementById("open-popup-btn")
      .addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.add("active");
        console.log("Log ho rha hun mai ");
      });

    document
      .getElementById("dismiss-popup-btn")
      .addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.remove("active");
      });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div class="popup center">
        <div class="title">Your Carbon Emission history</div>
        <div class="description"></div>
        <div class="dismiss-btn">
          <button id="dismiss-popup-btn">Dismiss</button>
        </div>
      </div>

      <div class="center-btn">
        <button id="open-popup-btn">Show history</button>
      </div>
    </div>
  );
};

export default Dilogue;
