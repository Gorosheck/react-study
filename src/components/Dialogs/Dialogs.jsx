import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className={classes.dialog + ' ' + classes.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>

   );
}

const Message = (props) => {
   return (
      <div className={classes.message}>{props.text}</div>
   );
}

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <DialogItem name="Леша" id="1" />
            <DialogItem name="Артем" id="2" />
            <DialogItem name="Дима" id="3" />
            <DialogItem name="Лагуна" id="4" />
            <DialogItem name="Андрей" id="5" />
         </div>
         <div className={classes.messages}>
            <Message text="Hi" />
            <Message text="How are you" />
            <Message text="Yo" />
         </div>
      </div>
   );
}
export default Dialogs;