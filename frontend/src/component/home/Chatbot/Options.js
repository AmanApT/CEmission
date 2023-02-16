import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Web Ass",
      handler: props.actionProvider.webAss,
      // handler: () => {
      //   props.actionProvider.webAss;
      // },
      id: 1,
    },
    { text: "Previous Records", handler: () => {}, id: 2 },
    { text: "Rate Your Exp", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
