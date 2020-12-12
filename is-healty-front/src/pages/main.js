import React from 'react';
import Btn from '../components/Button/index';

function Main() {
  const BtnProps = () => {
    return {
      label: 'Button',
      color: 'secondary',
    };
  };

  return (
    <div className="main">
      <h1>isHealthy</h1>
      <Btn {...BtnProps()} />
    </div>
  );
}

export default Main;
