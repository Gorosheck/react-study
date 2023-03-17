import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const App = () => {

  return (
    <div>
      <div><Header /></div>
      <div><Tech /></div>
    </div>
  );
}

const Header = () => {
  return (<div>
    <a href="#">home</a>
    <a href="#">news</a>
    <a href="#">contact</a>
    <a href="#">other</a>
  </div>
  );
}

const Tech = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  );
}

export default App;
