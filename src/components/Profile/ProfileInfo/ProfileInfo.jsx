import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
   return (
      <div>
         <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg' />
         </div>

         <div>
            <img src={props.profile.photos.large} />
         </div>
         <div>
            Описание
         </div>
         <div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
         </div>

      </div>
   );
}
export default ProfileInfo;