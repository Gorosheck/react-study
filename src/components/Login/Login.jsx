import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"login"} name={"login"} component={Input} validate={[required, maxLength15]} />
         </div>
         <div>
            <Field placeholder={"password"} name={"password"} component={Input} validate={[required]} />
         </div>
         <div>
            <Field type="checkbox" name={"rememberMe"} component={Input} /> Remember me
         </div>
         <div>
            <button>Submit</button>
         </div>
      </form>
   );
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {

   }
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
}
export default Login;