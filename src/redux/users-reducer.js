const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   users: [
      { id: 1, fullName: 'Sasha', status: '12', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, fullName: 'Andrew', status: '11', location: { city: 'Moscow', country: 'Belarus' } },
      { id: 3, fullName: 'Alex', status: '11', location: { city: 'Kiev', country: 'Belarus' } },
      { id: 4, fullName: 'Vova', status: '11', location: { city: 'NY', country: 'Belarus' } }
   ]
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {

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

export default usersReducer;