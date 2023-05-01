const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
   messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
   ],
   dialogs: [
      { id: 1, name: 'Леша' },
      { id: 2, name: 'Артем' },
      { id: 3, name: 'Дима' },
      { id: 4, name: 'Лагуна' },
      { id: 5, name: 'Андрей' }
   ],
   newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

   let stateCopy = {
      ...state,
      messages: [...state.messages]
   };

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         stateCopy.newMessageBody = action.body;
         return stateCopy;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         stateCopy.newMessageBody = '';
         stateCopy.messages.push({ id: 6, message: body });
         return stateCopy;
      default:
         return state;
   }
}

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageBodyCreator = (body) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
   }
}

export default dialogsReducer;