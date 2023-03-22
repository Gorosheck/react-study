import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
   return (
      <div className={classes.content}>
         <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg' />
         </div>

         <div>
            <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' />
         </div>
         <div>
            My posts
            <div>
               New post
            </div>
            <div className={classes.posts}>
               <div className={classes.item}>post 1</div>
               <div className={classes.item}>post 2</div>
            </div>
         </div>
      </div>
   );
}
export default Profile;