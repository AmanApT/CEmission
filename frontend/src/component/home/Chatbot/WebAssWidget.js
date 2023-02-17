// components/WebAssWidget.js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const WebAssWidget = (props) => {
  const { setState, steps, loggedUser, setHomeQuestion, setCheckUser } = props;

  const handleClick = () => {
    // const message = createChatBotMessage("", { widget });
    console.log(loggedUser);
    if (loggedUser) {
      // rook na ❤️de
      setHomeQuestion(1);
    } else {
      setCheckUser(1);
    }

    // setState((prevState) => ({
    //   ...prevState,
    //   messages: [...prevState.messages, message],
    // }));
  };

  const handleClick2 = () => {
    if (loggedUser) {
      setHomeQuestion(2);
    } else {
      setCheckUser(1);
    }
  };

  return (
    <div className="options-container">
      {/* <p>Are you an Individual or Industry?</p> */}
      <button className="option-button" onClick={() => handleClick()}>
        Individual
      </button>
      <button className="option-button" onClick={() => handleClick2()}>
        Industry
      </button>
      
    </div>
  );
};

export default WebAssWidget;
