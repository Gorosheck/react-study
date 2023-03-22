import React from 'react';
import MyPosts from './MyPosts/MyPosts';
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
         <MyPosts />
      </div>
   );
}
export default Profile;