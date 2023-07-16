import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer'
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';

class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}


export default compose(
  withRouter,
  connect(null, (initializeApp)))(App);
