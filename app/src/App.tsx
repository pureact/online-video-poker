import React from 'react';
import Button from './components/Button'

function App() {
  return (
    <div className="grid grid-cols-5 gap-4 h-full bg-vp-blue">
      <div className="flex justify-center p-6">
        <span className="text-6xl text-vp-yellow-500 font-serif text-shadow">Video Poker</span>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center bg-vp-dark-blue">
        <span className="text-white">Center</span>
        <Button label="BET ONE" onClick={() => console.log('Yo')} />
      </div>
    </div>
  );
}

export default App;
