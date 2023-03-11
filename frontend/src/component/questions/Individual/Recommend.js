import React, { useState } from "react";

const Recommend = ({ setToggleQuestion, opArr }) => {
  const [recommendToggle, setRecommendToggle] = useState(1);

  return (
    <div className="recMain">
      <div className="recChild">
        <div className="recLeft">
          <h3 onClick={() => setRecommendToggle(1)}>Electricity</h3>
          <h3 onClick={() => setRecommendToggle(2)}>Car Mileage</h3>
          <h3 onClick={() => setRecommendToggle(3)}>Newspapers</h3>
          <h3 onClick={() => setRecommendToggle(4)}>Aluminium & Tin</h3>
        </div>
        <div className="recProgressBar"></div>
        <div className="recRight">
        {recommendToggle === 1 ? (
          <div>
            <h1>Electricity Bill</h1>
            {/* <div>{opArr[1]}</div> */}
          </div>
        ) : recommendToggle === 2 ? (
          <div>
            <h1>Car Mileage</h1>
            {/* <div>{opArr[2]}</div> */}
          </div>
        ) : recommendToggle === 3 ? (
          <div>
            <h1>Recycling Newspapers</h1>
            {/* <div>{opArr[3]}</div> */}
          </div>
        ) : (
          <div>
            <h1>Recycling Aluminium & Tin</h1>
            {/* <div>{opArr[4]}</div> */}
          </div>
        )} </div>
      </div>
      {/* <button onClick={() => setToggleQuestion(5)}> wapas aa ja </button> */}
    </div>
  );
};

export default Recommend;
