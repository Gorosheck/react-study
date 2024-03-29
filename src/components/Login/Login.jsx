import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm = (handleSubmit, error) => {
   return (
      <form onSubmit={handleSubmit}>
         <div>
            <Field placeholder={"email"} name={"email"} component={Input} validate={[required]} />
         </div>
         <div>
            <Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required]} />
         </div>
         <div>
            <Field type="checkbox" name={"rememberMe"} component={Input} /> Remember me
         </div>
         {error && <div className={style.formSummaryError}>{error}</div>}
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
      props.login(formData.email, formData.password, formData.rememberMe)
   }
   if (props.isAuth) {
      <Navigate to="/profile" />
   }
   return (
      <div>
         <h1>LOGIN</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
}


const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);