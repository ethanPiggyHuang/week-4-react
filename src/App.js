import './App.css';
import React from 'react';
import Header from './component/Header';
import MainMessage from './component/MainMessage';
import Content from './component/Content';
// import TestCountTimer from './component/TestCountTimer'

const App = () => {
  return (
    <div>
      <Header />
      <MainMessage />
      <Content />
      {/* <TestCountTimer /> */}
    </div>
  );
}

export default App;
