import { connect } from "react-redux";
import { sendMessageCreator,  updateNewMessageBodyCreator,} from "redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateTOProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateTOProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
