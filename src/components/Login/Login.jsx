import React from 'react';

const Login = (props) => {
   return (
      <div>
         <h1>LOGIN</h1>
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
      </div>
   );
}
export default Login;