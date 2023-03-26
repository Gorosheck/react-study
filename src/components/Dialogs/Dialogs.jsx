import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <div className={classes.dialog + ' ' + classes.active}>
               <NavLink to='/dialogs/1'>Леша</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/2'>Артем</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/3'>Дима</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/4'>Лагуна</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/5'>Андрей</NavLink>
            </div>
         </div>
         <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How are you</div>
            <div className={classes.message}>Yo</div>
         </div>
      </div>
   );
}
export default Dialogs;