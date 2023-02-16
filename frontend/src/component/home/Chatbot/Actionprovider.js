class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    addMessageToState,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
    this.addMessageToState = addMessageToState;
  }

  webAss = () => {
    const message = this.createChatBotMessage("Aaja bhosdu", {
      widget: "webAss",
    });

    this.addMessageToState(message);
  };
}

export default ActionProvider;
