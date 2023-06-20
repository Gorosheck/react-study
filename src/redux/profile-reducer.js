import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   postsData: [
      { id: 1, message: 'How are you?', likesCount: 12 },
      { id: 2, message: 'Its my first post', likesCount: 11 },
      { id: 3, message: 'Its my first post', likesCount: 11 },
      { id: 4, message: 'Its my first post', likesCount: 11 }
   ],
   newPostText: "fix value text for post",
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };
      }

      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };
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

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
   userAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
   });
}

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
   });
}

export default profileReducer;