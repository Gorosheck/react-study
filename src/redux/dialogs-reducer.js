const SEND_MESSAGE = 'SEND-MESSAGE';

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
   ]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: body }]
         };
      default:
         return state;
   }
}

export const sendMessageCreator = (newMessageBody) => {
   return {
      type: SEND_MESSAGE,
      newMessageBody
   }
}


export default dialogsReducer;