import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={classes.header}>
         <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' />
         <div className={classes.loginBlock}>
            {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   );
}
export default Header;