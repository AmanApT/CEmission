import React from "react";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const QuestionPage3 = ({ setToggleQuestion }) => {
  return (
    <div className="questionPage1">
      <ArrowBackIosIcon onClick={() => setToggleQuestion(2)} />
      <div className="questionDiv1">
        <div className="progressBar" style={{ marginTop: "3.5%" }}>
          <div>
            <label>01</label>
            <div
              className="progess"
              style={{ backgroundColor: "#165a4a" }}
            ></div>
          </div>

          <div>
            <label>02</label>
            <div
              className="progess"
              style={{ backgroundColor: "#165a4a" }}
            ></div>
          </div>
          <div>
            <label>03</label>
            <div className="progess" style={{ backgroundColor: "white" }}></div>
          </div>

          <div>
            <label>04</label>
            <div className="progess" style={{ backgroundColor: "white" }}></div>
          </div>
        </div>

        <div className="questionElectricity">
          <h1>How many number of flights did you take past year?</h1>
          <p style={{ color: "gray" }}>Duration of flight: 4 hour or less</p>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
          />
        </div>

        <div className="questionGas">
          <h1>How many number of flights did you take past year?</h1>
          <p style={{ color: "gray" }}>Duration of flight: 4 hour or more</p>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Km"
            variant="filled"
          />
        </div>
        <button
          className="nextQuestionPage"
          onClick={() => setToggleQuestion(4)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default QuestionPage3;
