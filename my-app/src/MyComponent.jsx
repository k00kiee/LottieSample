import React from 'react';
import Lottie from 'react-lottie';
import animationData from './data/5056-delivery-latest.json';

const MyComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <h1>Lottie</h1>
      <Lottie options={defaultOptions} height={500} width={500} />
    </>
  );
};

export default MyComponent;
