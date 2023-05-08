import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.css';
import Header from './components/Header';
import Cards from './components/Cards';
import SideNav from './components/SideNav';


function App() {
  return (
    <div className="App relative">
      <Header />
      <div className='flex'>
        <SideNav />
        <Cards />
      </div>
    </div>
  );
}

export default App;
