import React from 'react';
import Hello from './example/Hello';
import { StateComponent1 } from './example/StateComponent1';

function App() {
  return (
    <div className='App'>
      <Hello name={"hi hollow"} color={'red'}></Hello>
      <StateComponent1></StateComponent1>
    </div>
  );
}

export default App;
