import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../ava-small.jpg';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { userAPI } from "../../api/api";

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
                     props.toggleFollowingProgress(true, u.id);
                     userAPI.unfollow(u.id)
                        .then(response => {
                           if (response.data.resultCode === 0) {
                              props.unfollow(u.id);
                           }
                           props.toggleFollowingProgress(false, u.id);
                        });
                  }}>unfollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                     props.toggleFollowingProgress(true, u.id);
                     userAPI.follow(u.id)
                        .then(response => {
                           if (response.data.resultCode === 0) {
                              props.follow(u.id);
                           }
                           props.toggleFollowingProgress(false, u.id);
                        });


                  }}>follow</button>}</div>
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