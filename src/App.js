import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './Header';
import Technologies from './Technologies';


const App = () => {

  return (
    <div>
      <div><Header /></div>
      <div><Technologies /></div>
    </div>
  );
}





export default App;
