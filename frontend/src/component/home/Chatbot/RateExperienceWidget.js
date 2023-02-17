// components/RateExperienceWidget.js
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import StarsRating from 'stars-rating';

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

  const ratingChanged = (newRating) => {
    console.log(newRating);
    const message = createChatBotMessage(
      `Thank you for your feedback! You rated us ${newRating} stars.`
    );

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

  };

  return (
    <div>
      <p className="react-chatbot-kit-chat-bot-message"> How would you rate your Experience?</p>
      {/* {renderStars()} */}

      <StarsRating 
  
      count={5}
      onChange={ratingChanged}
      size={40}
      color2={'#ffd700'}
    />

    </div>
  );
};

export default RateExperienceWidget;
