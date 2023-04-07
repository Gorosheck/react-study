const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
   _state: {
      profilePage: {
         postsData: [
            { id: 1, message: 'How are you?', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 11 },
            { id: 3, message: 'Its my first post', likesCount: 11 },
            { id: 4, message: 'Its my first post', likesCount: 11 }
         ],
         newPostText: "fix value text for post"
      },
      dialogsPage: {
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
         newMessageBody: "New message"
      }
   },
   _callSubscriber() {
      console.log('State changed');
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
         this._state.dialogsPage.newMessageBody = action.body;
         this._callSubscriber(this._state);
      } else if (action.type === 'SEND-MESSAGE') {
         let body = this._state.dialogsPage.newMessageBody;
         this._state.dialogsPage.newMessageBody = '';
         this._state.dialogsPage.messages.push({ id: 6, message: body });
         this._callSubscriber(this._state);
      }
   }
}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
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

export default store;

window.state = store;