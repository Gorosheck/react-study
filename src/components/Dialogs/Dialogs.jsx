import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = () => {
      let textMessage = newMessageElement.current.value;
      alert(textMessage);
   }


   let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.imgUrl} />);

   let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
               <div><textarea ref={newMessageElement} placeholder='Enter your message' name="" id="" cols="30" rows="10"></textarea></div>
               <div><button onClick={addMessage}>Add message</button></div>
            </div>
         </div>
      </div>
   );
}
export default Dialogs;