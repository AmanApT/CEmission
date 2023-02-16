// components/WebAssWidget.js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const WebAssWidget = (props) => {
  const { setState, steps } = props;

  const handleClick = (widget) => {
    const message = createChatBotMessage("", { widget });

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      <p>Are you an Individual or Industry?</p>
      <button onClick={() => handleClick("individual")}>Individual</button>
      <button onClick={() => handleClick("industry")}>Industry</button>
      {/* <br />
      <p>Would you like to learn more about our Chatbot's history?</p>
      <button onClick={() => handleClick("history")}>Yes</button>
      <br />
      <p>Would you like to rate your experience with our Chatbot?</p>
      <button onClick={() => handleClick("rateExperience")}>Yes</button> */}
    </div>
  );
};

export default WebAssWidget;
