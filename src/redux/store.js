import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
         newMessageBody: ""
      },
      sidebar: {}
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

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
   }
}

export default store;

window.state = store;