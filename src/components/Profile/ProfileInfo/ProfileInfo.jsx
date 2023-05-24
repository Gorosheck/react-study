import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div>
         <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg' />
         </div>

         <div>
            <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' /> Описание
         </div>

      </div>
   );
}
export default ProfileInfo;