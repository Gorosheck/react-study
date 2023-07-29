import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
   let stateWithSetState = useState(false);
   let editMode = stateWithSetState[0];
   let setEditMode = stateWithSetState[1];

   return (
      <div>
         {/* {
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || "---------------"}</span>
            </div>
         }
         {
            false && */}
         <div>
            <input autoFocus={true} value={""} />
         </div>
         {/* } */}
      </div >
   );
}

export default ProfileStatusWithHooks;