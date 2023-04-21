import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer postsData={props.state.postsData} dispatch={props.dispatch} newPostText={props.state.newPostText} />
      </div>
   );
}
export default Profile;