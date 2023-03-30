import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
   }

   let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div><textarea ref={newPostElement} name="" id="" cols="30" rows="2"></textarea></div>
            <div><button onClick={addPost}>Add post</button></div>
         </div>
         <div className={classes.posts}>
            {postsElements}
         </div>
      </div>
   );
}
export default MyPosts;