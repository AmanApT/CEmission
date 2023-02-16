// components/RateExperienceWidget.js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const RateExperienceWidget = (props) => {
  const { setState } = props;

  const handleClick = (rating) => {
    const message = createChatBotMessage(
      `Thank you for your feedback! You rated us ${rating} stars.`
    );

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} onClick={() => handleClick(i)}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      <p>How would you rate your experience with our chatbot?</p>
      {renderStars()}
    </div>
  );
};

export default RateExperienceWidget;
