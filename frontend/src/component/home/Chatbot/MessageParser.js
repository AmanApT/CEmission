class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("options")) {
      this.actionProvider.handleOptions();
    }
    if (lowercase.includes("webass")) {
      this.actionProvider.handleWebAss();
    }
    if (lowercase.includes("history")) {
      this.actionProvider.handleHistory();
    }
  }
}

export default MessageParser;
