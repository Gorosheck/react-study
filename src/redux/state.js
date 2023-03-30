import { rerenderEntireTree } from './../render'

let state = {
   profilePage: {
      postsData: [
         { id: 1, message: 'How are you?', likesCount: 12 },
         { id: 2, message: 'Its my first post', likesCount: 11 },
         { id: 3, message: 'Its my first post', likesCount: 11 },
         { id: 4, message: 'Its my first post', likesCount: 11 }
      ]
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
}

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
   };
   state.profilePage.postsData.push(newPost);
   rerenderEntireTree(state);
}

export default state;