import React from "react";
import TextField from "@mui/material/TextField";

const QuestionPage1 = () => {
  return (
    <div className="questionPage1">
      <div className="questionDiv1">
        <div className="progressBar">
          <div>
            <label>01</label>
            <div className="progess" style={{backgroundColor:"#165a4a"}}></div>
          </div>

          <div>
            <label>02</label>
            <div className="progess" style={{backgroundColor:"#165a4a"}}></div>
          </div>
          <div>
            <label>03</label>
            <div className="progess" style={{backgroundColor:"white"}}></div>
          </div>

          <div>
            <label>04</label>
            <div className="progess" style={{backgroundColor:"white"}}></div>
          </div>
        </div>

        <div className="questionElectricity">
          <h1>How many number of flights did you take past year?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
          />
        </div>

        <div className="questionGas">
          <h1>How many number of flights did you take past year?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Km"
            variant="filled"
          />
        </div>
        <button className="nextQuestionPage">NEXT</button>
      </div>
    </div>
  );
};

export default QuestionPage1;
