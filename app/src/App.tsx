import React from 'react';
import Button from './components/Button'
import Table from './components/Table'

function App() {
  const bet = 5
  return (
    <div className="grid grid-cols-5 gap-4 h-full bg-vp-blue">
      <div className="flex justify-center p-6">
        <span className="text-6xl text-vp-yellow-500 font-serif text-shadow">Video Poker</span>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center bg-vp-dark-blue">
        <Table bet={bet}/>
        <span className="text-white">Center</span>
        <Button label="BET ONE" onClick={() => console.log('Yo')} />
      </div>
    </div>
  );
}

export default App;
