import React from "react";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Home from "../home/Home";

const QuestionPage1 = ({ setToggleQuestion, setHomeQuestion }) => {
  return (
    <div className="questionPage1">
      <ArrowBackIosIcon onClick={() => setHomeQuestion(0)} />
      <div className="questionDiv1">
        <div className="progressBar">
          <div>
            <label>01</label>
            <div className="progess" style={{ backgroundColor: "white" }}></div>
          </div>

          <div>
            <label>02</label>
            <div className="progess" style={{ backgroundColor: "white" }}></div>
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
          <h1>How much is your monthly Electricity Bill?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
            required
          />
        </div>

        <div className="questionGas">
          <h1>How much is your monthly Gas Bill?</h1>
          <TextField
            style={{ width: "60%", margin: "3%" }}
            id="filled-basic"
            label="Rs."
            variant="filled"
            required
          />
        </div>
        <button
          className="nextQuestionPage"
          onClick={() => setToggleQuestion(2)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default QuestionPage1;
