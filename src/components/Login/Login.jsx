import React from 'react';
import { reduxForm } from 'redux-form';

const LoginForm = (props) => {
   return (
      <form>
         <div>
            <input placeholder={"login"} />
         </div>
         <div>
            <input placeholder={"pass"} />
         </div>
         <div>
            <input type="checkbox" /> Remember me
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
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm />
      </div>
   );
}
export default Login;