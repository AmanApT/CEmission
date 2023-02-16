import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Reclaim Green",
   customStyles: {
    botMessageBox: {
      backgroundColor: "#165A4A",
    },
  },
  initialMessages: [createChatBotMessage(`Hello! How may I help You ?`)],
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParser {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
}

export default config