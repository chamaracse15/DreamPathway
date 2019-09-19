import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Hello All Refer Follows</h1>
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <li>forth</li>
        </ul>
      </nav>
      <main><h2>this is where important things pop up</h2></main>
    <Footer /> 
    <Header />
    <MyInfo/>
    </div>
  );
}

export default App;
