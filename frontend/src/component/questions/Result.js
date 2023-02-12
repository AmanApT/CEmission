import React from "react";
import logo from "../questions/logo_v2_1.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Result = ({ setToggleQuestion }) => {
  return (
    <div className="resultDiv">
      <ArrowBackIosIcon onClick={() => setToggleQuestion(4)} />
      <img className="resultLogo" src={logo} alt="React Logo" />
      <div className="resultSubDiv">
        <div className="resultLeft">
          <h2
            style={{
              padding: "5%",
              marginTop: "6%",
              marginLeft: "5%",
              color: "white",
            }}
          >
            Result
          </h2>
          <div
            className="resultInputInfo"
            style={{ marginLeft: "10%", color: "white" }}
          >
            <p className="resultInputEachInfo">
              Your monthly Electricity Bill :{" "}
            </p>

            <p className="resultInputEachInfo">Your monthly Gas Bill : 2.0</p>
            <p className="resultInputEachInfo">Your monthly Oil Bill :</p>
            <p className="resultInputEachInfo">Your yearly Car Mileage :</p>
            <p className="resultInputEachInfo">
              Your Your Past year number of flights travels for 4hrs or less
              duration :
            </p>
            <p className="resultInputEachInfo">
              Your Your Past year number of flights travels for 4hrs or more
              duration :
            </p>
            <p className="resultInputEachInfo">
              Recycled newspapers past year :
            </p>
            <p className="resultInputEachInfo">
              Recycled Aluminium & Tin past year :
            </p>
          </div>
        </div>
        <div className="resultRight">
          <div className="carbonEmissionResult">
            <p>Your Average Carbon Emission is :</p>
            <h1> 223.4 tonnes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
