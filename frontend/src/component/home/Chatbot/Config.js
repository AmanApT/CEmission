// chatbot/config.js
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import WebAssWidget from "./WebAssWidget";
import HistoryWidget from "./HistoryWidget";
import IndividualWidget from "./IndividualWidget";
import IndustryWidget from "./IndustryWidget";
import RateExperienceWidget from "./RateExperienceWidget";

const config = {
  botName: "My Chatbot",
  initialMessages: [
    createChatBotMessage("Hey there! How can I help you today?", {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "webAss",
      widgetFunc: (props) => <WebAssWidget {...props} />,
    },
    {
      widgetName: "history",
      widgetFunc: (props) => <HistoryWidget {...props} />,
    },
    {
      widgetName: "individual",
      widgetFunc: (props) => <IndividualWidget {...props} />,
    },
    {
      widgetName: "industry",
      widgetFunc: (props) => <IndustryWidget {...props} />,
    },
    {
      widgetName: "rateExperience",
      widgetFunc: (props) => <RateExperienceWidget {...props} />,
    },
  ],
};

export default config;
