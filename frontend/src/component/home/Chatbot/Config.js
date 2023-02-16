import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import WebAss from "./WebAss";

const config = {
  botName: "Reclaim Green",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#165A4A",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hello! How may I help You ?`, {
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
      widgetFunc: (props) => <WebAss {...props} />,
    },
  ],
};

export default config;
