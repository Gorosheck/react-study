import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <StoreContext.Provider value={store}>
            <App state={state} store={store} />
         </StoreContext.Provider>
      </React.StrictMode>
   );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
