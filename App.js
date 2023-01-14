import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Header from './src/components/Header';

const App = () =>{
  /**
   * Header
   *  -Logo
   *  -Menu
   * Body
   *  -Search
   *  -Restaurant card
   *    - imgae
   *    - Title 
   *    - Discription
   * Footer
   */
  return<>
    <Header />
    <Body />
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);