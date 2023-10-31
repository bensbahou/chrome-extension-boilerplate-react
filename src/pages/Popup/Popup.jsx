import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="100" />
        <Greetings />
        
        
      </header>
    </div>
  );
};

export default Popup;
