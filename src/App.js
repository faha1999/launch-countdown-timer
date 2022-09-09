import React from 'react';
import { CountDown } from './components/CountDown';

export const App = () => {
  return (
    <>
      <main>
        <h1>We're launching soon</h1>
        <CountDown />
      </main>
    </>
  );
};
