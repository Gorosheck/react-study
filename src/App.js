import React from 'react';
import './App.css';



const App = () => {

  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>

      </nav>
      <div className='content'>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Stars_01_%28MK%29.jpg/911px-Stars_01_%28MK%29.jpg' />
        </div>

        <div>
          <img src='https://motoprokat.by/wp-content/uploads/2018/08/logo_bike.jpg' />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
