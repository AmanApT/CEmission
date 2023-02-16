// components/Options.js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const Options = (props) => {
  //   const { handleClick } = props;
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
      <p>What can I help you with today?</p>
      <button onClick={() => handleClick("webAss")}>WebAss</button>
      <button onClick={() => handleClick("history")}>History</button>
      <button onClick={() => handleClick("rateExperience")}>
        Rate your experience
      </button>
    </div>
  );
};

export default Options;
