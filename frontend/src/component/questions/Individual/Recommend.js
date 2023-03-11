import React, { useState } from "react";

const Recommend = ({ setToggleQuestion, opArr }) => {
  const [recommendToggle, setRecommendToggle] = useState(1);

  const progressBar = document.getElementsByClassName("progressDiv")[0];
  // const leftPart = document.getElementsByClassName("recLeft")[0];
  const left1 = document.getElementsByClassName("left1")[0];
  const left2 = document.getElementsByClassName("left2")[0];
  const left3 = document.getElementsByClassName("left3")[0];
  const left4 = document.getElementsByClassName("left4")[0];

  const handleClick = () => {
    setRecommendToggle(1);
    progressBar.style.top = "7%";
    left1.style.color = "white";
    left2.style.color = "#ccc";
    left3.style.color = "#ccc";
    left4.style.color = "#ccc";
  };

  const handleClick2 = () => {
    setRecommendToggle(2);
    progressBar.style.top = "25%";
    left1.style.color = "#ccc";
    left2.style.color = "white";
    left3.style.color = "#ccc";
    left4.style.color = "#ccc";
  };

  const handleClick3 = () => {
    setRecommendToggle(3);
    progressBar.style.top = "45%";
    left1.style.color = "#ccc";
    left2.style.color = "#ccc";
    left3.style.color = "white";
    left4.style.color = "#ccc";
  };

  const handleClick4 = () => {
    setRecommendToggle(3);
    progressBar.style.top = "65%";
    left1.style.color = "#ccc";
    left2.style.color = "#ccc";
    left3.style.color = "#ccc";
    left4.style.color = "white";
  };

  return (
    <div className="recMain">
      <div className="recChild">
        <div className="recLeft">
          <h3 className="left1" onClick={handleClick}>
            Electricity
          </h3>
          <h3 className="left2" onClick={handleClick2}>
            Car Mileage
          </h3>
          <h3 className="left3" onClick={handleClick3}>
            Newspapers
          </h3>
          <h3 className="left4" onClick={handleClick4}>
            Aluminium & Tin
          </h3>
        </div>
        <div className="recProgressBar">
          <div className="progressDiv"></div>
        </div>
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
          )}{" "}
        </div>
      </div>
      {/* <button onClick={() => setToggleQuestion(5)}> wapas aa ja </button> */}
    </div>
  );
};

export default Recommend;
