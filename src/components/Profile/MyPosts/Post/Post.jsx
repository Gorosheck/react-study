import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div>

         <div className={classes.item}>
            <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' />
            {props.message}
            <div>
               <span>Like</span>
            </div>

         </div>

      </div>
   );
}
export default Post;