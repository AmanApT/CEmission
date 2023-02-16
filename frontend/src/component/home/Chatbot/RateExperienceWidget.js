import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const RateExperienceWidget = (props) => {
  const { setState } = props;

  const handleGoodExperience = () => {
    const message = createChatBotMessage("Thank you for your feedback!", {
      widget: "goodbye",
    });

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleBadExperience = () => {
    const message = createChatBotMessage(
      "We are sorry to hear that. Please contact us at support@mychatbot.com",
      {
        widget: "goodbye",
      }
    );

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      <p>How was your experience?</p>
      <button onClick={handleGoodExperience}>Good</button>
      <button onClick={handleBadExperience}>Bad</button>
    </div>
  );
};

export default RateExperienceWidget;
