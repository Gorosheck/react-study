import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoUrl: 'https://img.freepik.com/premium-vector/cute-little-girl-avatar-round-profile-picture-isolated-on-white-background_176411-3067.jpg', followed: false, fullName: 'Sasha', status: '12', location: { city: 'Minsk', country: 'Belarus' } },
         { id: 2, photoUrl: 'https://img.freepik.com/premium-vector/cute-little-girl-avatar-round-profile-picture-isolated-on-white-background_176411-3067.jpg', followed: true, fullName: 'Andrew', status: '11', location: { city: 'Moscow', country: 'Belarus' } },
         { id: 3, photoUrl: 'https://img.freepik.com/premium-vector/cute-little-girl-avatar-round-profile-picture-isolated-on-white-background_176411-3067.jpg', followed: true, fullName: 'Alex', status: '11', location: { city: 'Kiev', country: 'Belarus' } },
         { id: 4, photoUrl: 'https://img.freepik.com/premium-vector/cute-little-girl-avatar-round-profile-picture-isolated-on-white-background_176411-3067.jpg', followed: false, fullName: 'Vova', status: '11', location: { city: 'NY', country: 'Belarus' } }
      ])
   }
   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div><img src={u.photoUrl} alt="" className={styles.userPhoto} /></div>
               <div>{u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                  : <button onClick={() => { props.follow(u.id) }}>follow</button>}</div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}
export default Users;