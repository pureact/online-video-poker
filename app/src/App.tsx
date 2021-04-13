import React from 'react';
import Button from './components/Button'
import Table from './components/Table'
import Card from './components/Card';

function App() {
  return (
    <div className="grid grid-cols-5 h-full bg-vp-blue">
      <div className="flex justify-center px-2 py-6">
        <span className="text-3xl xl:text-4xl 2xl:text-5xl text-vp-yellow-500 font-serif text-shadow cursor-default">Video Poker</span>
      </div>
      <div className="col-span-3 flex justify-center items-center bg-vp-dark-blue px-4">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-md">
          <Table bet={1}/>

          <div className="flex py-4 invisible">
            <span className="text-5xl font-bold tracking-wider text-vp-red stroke-yellow cursor-default">
              GAME OVER
            </span>
          </div>

          <span className="grid grid-cols-5 gap-2 w-full justify-between text-black mb-16">
            <Card rank={"10"} suit={"S"}/>
            <Card rank={"11"} suit={"H"}/>
            <Card rank={"12"} suit={"D"}/>
            <Card rank={"13"} suit={"C"}/>
            <Card rank={"14"} suit={"S"}/>
          </span>

          <div className="flex flex-row w-full justify-between text-4xl font-bold tracking-wider text-vp-red py-4 cursor-default">
            <span className="stroke-yellow">BET 5</span>
            <span className="stroke-yellow">CREDITS 200</span>
          </div>
          
          <div className="self-end grid grid-cols-5 gap-2 w-full pb-4">
            <Button label="HELP"/>
            <Button label="LOWER BET"/>
            <Button label="BET ONE"/>
            <Button label="BET MAX"/>
            <Button label="DRAW/DEAL"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
