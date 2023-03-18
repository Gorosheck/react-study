import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './Header';
import Technologies from './Technologies';
import Footer from './Footer';


const App = () => {

  return (
    <div>
      <div><Header /></div>
      <div><Technologies /></div>
      <Footer />
    </div>
  );
}





export default App;
