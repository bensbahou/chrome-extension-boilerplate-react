import React, { useState } from 'react';
// @ts-ignore
import icon from '../../assets/img/icon-128.png';

const GreetingComponent = () => {
  const [name, setName] = useState('Developer');

  return (
    <div>
      <p>Hello, {name}</p>
      <img src={icon} alt="extension icon" />
    </div>
  );
};

export default GreetingComponent;
