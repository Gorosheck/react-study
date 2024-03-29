import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../ava-small.jpg';
import { NavLink } from "react-router-dom";

let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return <div>
      <div>
         {pages.map(page => {
            return <span
               className={props.currentPage === page && styles.selectedPage}
               onClick={() => { props.onPageChanged(page); }}
            >{page}</span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                  </NavLink>
               </div>
               <div>{u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                     props.unfollow(u.id)
                  }}>unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                     props.follow(u.id)
                  }}>follow</button>
               }</div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>Minsk</div>
                  <div>Belarus</div>
               </span>
            </span>
         </div >)
      }
   </div >
}

export default Users;