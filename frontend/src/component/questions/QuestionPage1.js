import React from "react";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";
// import green from '...public/images/green.png'

const QuestionPage1 = () => {
  return (
    <div className="questionPage1">
      <div className="questionDiv1">
        <div className="progressBar">
          <div>
            <label>01</label>
            <div className="progess"></div>
          </div>

          <div>
            <label>02</label>
            <div className="progess"></div>
          </div>
          <div>
            <label>03</label>
            <div className="progess"></div>
          </div>

          <div>
            <label>04</label>
            <div className="progess"></div>
          </div>
        </div>

        <div className="questionElectricity">
          <h1>How much is your monthly Electricity Bill?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
          />
        </div>

        <div className="questionGas">
          <h1>How much is your monthly Gas Bill?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
          />
        </div>
        <button className="nextQuestionPage">NEXT</button>
      </div>
    </div>
  );
};

export default QuestionPage1;
