import React from "react";
import Chatbot from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./Actionprovider";
import config from "./Config";
import 'react-chatbot-kit/build/main.css'

const ChatBot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
