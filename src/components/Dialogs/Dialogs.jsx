import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

   let onSendMessageClick = () => {
      props.dispatch(sendMessageCreator());
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(updateNewMessageBodyCreator(body));
   }


   let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.imgUrl} />);
   let messagesElements = props.state.messages.map(message => <Message message={message.message} />);
   let newMessageBody = props.state.newMessageBody;

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' name="" id="" cols="30" rows="10"></textarea></div>
               <div><button onClick={onSendMessageClick}>Add message</button></div>
            </div>
         </div>
      </div>
   );
}
export default Dialogs;