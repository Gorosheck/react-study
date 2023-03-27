import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Леша' },
      { id: 2, name: 'Артем' },
      { id: 3, name: 'Дима' },
      { id: 4, name: 'Лагуна' },
      { id: 5, name: 'Андрей' }
   ];
   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Yo' }
   ];

   let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = messages.map(message => <Message message={message.message} />);

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            {messagesElements}
         </div>
      </div>
   );
}
export default Dialogs;