const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi Hi Hi" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Sveta" },
  ],
  dialogsData: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Sveta" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
