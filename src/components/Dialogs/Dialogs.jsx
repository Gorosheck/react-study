import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
   let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }

   if (props.isAuth === false) return <Navigate to={"/login"} />;

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message1'></textarea></div>
               <div><button onClick={onSendMessageClick}>Add message</button></div>
            </div>
         </div>
      </div>
   );
}
export default Dialogs;