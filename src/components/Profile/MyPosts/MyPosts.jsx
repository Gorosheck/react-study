import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);


const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div><Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder='message' /></div>
         <div><button>Add post</button></div>
      </form>
   )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   }

   let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostFormRedux onSubmit={onAddPost} />
         <div className={classes.posts}>
            {postsElements}
         </div>
      </div>
   );
}


export default MyPosts;