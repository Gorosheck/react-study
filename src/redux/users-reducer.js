const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      { id: 1, followed: false, fullName: 'Sasha', status: '12', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, followed: true, fullName: 'Andrew', status: '11', location: { city: 'Moscow', country: 'Belarus' } },
      { id: 3, followed: true, fullName: 'Alex', status: '11', location: { city: 'Kiev', country: 'Belarus' } },
      { id: 4, followed: false, fullName: 'Vova', status: '11', location: { city: 'NY', country: 'Belarus' } }
   ]
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, folowed: true }
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, folowed: false }
               }
               return u;
            })
         }

      case SET_USERS: {
         return { ...state, users: [...state.users, ...action.users] }
      }

      default:
         return state;
   }
}

export const followAC = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;