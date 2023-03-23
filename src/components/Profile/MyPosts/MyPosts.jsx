import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={classes.posts}>
            <Post message="How are you?" />
            <Post message="Its my first post" />
         </div>
      </div>
   );
}
export default MyPosts;