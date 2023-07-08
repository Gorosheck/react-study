const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} validate={[required, maxLength100]} name="newMessageBody" placeholder="Enter your message" />
         </div>
         <div><button>Add message</button></div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)