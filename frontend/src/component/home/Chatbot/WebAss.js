import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Individual",
      // handler: props.actionProvider.handleJavascriptQuiz,
      handler: () => {
        console.log("Ass hu mein");
      },
      id: 1,
    },
    { text: "Industry", handler: () => {}, id: 2 },
    // { text: "Rate Your Exp", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
