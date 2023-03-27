import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'How are you?', likesCount: 12 },
  { id: 2, message: 'Its my first post', likesCount: 11 },
  { id: 3, message: 'Its my first post', likesCount: 11 },
  { id: 4, message: 'Its my first post', likesCount: 11 }
];

let dialogs = [
  { id: 1, name: 'Леша' },
  { id: 2, name: 'Артем' },
  { id: 3, name: 'Дима' },
  { id: 4, name: 'Лагуна' },
  { id: 5, name: 'Андрей' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Yo' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
