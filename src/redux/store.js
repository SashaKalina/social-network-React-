import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi, how are you?", like: 12 },
        { id: 2, message: "my first post", like: 11 },
      ],
      newPostText: "HI",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
