import React from 'react';

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

const Login = (props) => {
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginForm />
      </div>
   );
}
export default Login;