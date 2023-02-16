import React, { useState } from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const IndustryWidget = (props) => {
  const { setState, userID } = props;
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = createChatBotMessage(
      `Thanks, ${userID}, we'll contact you shortly.`,
      {
        widget: "rateExperience",
      }
    );

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      <p>Please enter your company's details:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input type="text" name="companyName" onChange={handleChange} />
        </label>
        <br />
        <label>
          Industry:
          <input type="text" name="industry" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IndustryWidget;
