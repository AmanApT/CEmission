import React, { useState } from "react";

const Recommend = ({ setToggleQuestion, opArr }) => {
  const [recommendToggle, setRecommendToggle] = useState(1);

  return (
    <div className="recMain">
      <div className="recChild">
        <div>
          <div onClick={() => setRecommendToggle(1)}>Electricity</div>
          <div onClick={() => setRecommendToggle(2)}>Car Mileage</div>
          <div onClick={() => setRecommendToggle(3)}>Newspapers</div>
          <div onClick={() => setRecommendToggle(4)}>Aluminium & Tin</div>
        </div>
        <div className="recProgressBar"></div>
        {recommendToggle === 1 ? (
          <div>
            <h1>Electricity Bill</h1>
            <div>{opArr[1]}</div>
          </div>
        ) : recommendToggle === 2 ? (
          <div>
            <h1>Car Mileage</h1>
            <div>{opArr[2]}</div>
          </div>
        ) : recommendToggle === 3 ? (
          <div>
            <h1>Recycling Newspapers</h1>
            <div>{opArr[3]}</div>
          </div>
        ) : (
          <div>
            <h1>Recycling Aluminium & Tin</h1>
            <div>{opArr[4]}</div>
          </div>
        )}
      </div>
      {/* <button onClick={() => setToggleQuestion(5)}> wapas aa ja </button> */}
    </div>
  );
};

export default Recommend;
