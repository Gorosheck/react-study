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
            { id: 3, message: 'Yo' }
         ],
         dialogs: [
            { id: 1, name: 'Леша' },
            { id: 2, name: 'Артем' },
            { id: 3, name: 'Дима' },
            { id: 4, name: 'Лагуна' },
            { id: 5, name: 'Андрей' }
         ]
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
   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
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
         this._state.profilePage.newPostText = newText;
         this._callSubscriber(this._state);
      }
   }


export default store;

   window.state = store;