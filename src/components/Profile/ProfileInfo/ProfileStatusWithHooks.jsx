import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
   // let stateWithSetState = useState(false);
   // let editMode = stateWithSetState[0];
   // let setEditMode = stateWithSetState[1];
   let [editMode, setEditMode] = useState(false);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);
   }
   return (
      <div>
         {!editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>{props.status || "---------------"}</span>
            </div>
         }

         {editMode &&
            <div>
               <input autoFocus={true} onBlur={deactivateEditMode} />
            </div>
         }
      </div >
   );
}

export default ProfileStatusWithHooks;