import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div><textarea name="" id="" cols="30" rows="2"></textarea></div>
            <div><button>Add post</button></div>
         </div>
         <div className={classes.posts}>
            <Post message="How are you?" likesCount="10" />
            <Post message="Its my first post" likesCount="15" />
         </div>
      </div>
   );
}
export default MyPosts;