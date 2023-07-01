import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';

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

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={classes.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux />
         </div>
      </div>
   );
}

const AddMessageForm = (props) => {
   <form onSubmit={props.handleSubmit}>
      <div>
         <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div><button>Add message</button></div>
   </form>
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)


export default Dialogs;