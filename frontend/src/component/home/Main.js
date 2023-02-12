import React from "react";

const Main = ({ setHomeQuestion, homeQuestion }) => {
  return (
    <div>
      <nav className="navBar"></nav>

      <div className="mainFirst">
        <div className="mainFirstDiv">
          <h1>ITS TIME TO OFFSET YOUR CARBON FOOTPRINTS EMISSION</h1>
        </div>
      </div>

      {/* <button onClick={() => setHomeQuestion(1)}>
        Question dekhne ke liye mujhe dabaye
      </button> */}
    </div>
  );
};

export default Main;
