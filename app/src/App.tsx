import React from 'react';
import Button from './components/Button'
import Table from './components/Table'

function App() {
  return (
    <div className="grid grid-cols-5 h-full bg-vp-blue">
      <div className="flex justify-center px-2 py-6">
        <span className="text-5xl text-vp-yellow-500 font-serif text-shadow">Video Poker</span>
      </div>
      <div className="col-span-3 flex justify-center items-center bg-vp-dark-blue">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-md">
          <Table bet={1}/>

          <div className="flex py-4">
            <span className="text-5xl font-bold text-vp-red stroke-yellow">
              GAME OVER
            </span>
          </div>

          <span className="text-white">Center</span>

          <div className="flex flex-row w-full justify-between text-4xl font-bold text-vp-red py-4">
            <span className="stroke-yellow">BET 5</span>
            <span className="stroke-yellow">CREDITS 200</span>
          </div>
          
          <div className="self-end grid grid-cols-5 gap-2 w-full pb-4">
            <Button label="HELP"/>
            <div/>
            <Button label="BET ONE"/>
            <Button label="BET MAX"/>
            <Button label="DRAW"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
