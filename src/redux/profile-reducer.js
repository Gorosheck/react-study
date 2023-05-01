const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   postsData: [
      { id: 1, message: 'How are you?', likesCount: 12 },
      { id: 2, message: 'Its my first post', likesCount: 11 },
      { id: 3, message: 'Its my first post', likesCount: 11 },
      { id: 4, message: 'Its my first post', likesCount: 11 }
   ],
   newPostText: "fix value text for post"
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         };
         let stateCopy = { ...state };
         stateCopy.postsData = [...state.postsData];
         stateCopy.postsData.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = { ...state };
         stateCopy.newPostText = action.newText;
         return stateCopy;
      }
      default:
         return state;
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

export default profileReducer;