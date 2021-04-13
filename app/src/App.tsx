import React, {useEffect, useState} from 'react';
import Button from './components/Button';
import Table from './components/Table';
import Card from './components/Card';
import VideoPoker from './VideoPoker';

function App() {
  let vp: VideoPoker;

  useEffect(() => {
    vp = new VideoPoker(200);
  }, [])

  const [bet, setBet] = useState(1);
  let held_cards = [false, false, false, false, false]

  function update_card(index: number) {
    held_cards[index] = !held_cards[index]
  }


  return (
    <div className="grid grid-cols-5 h-full bg-vp-blue">
      <div className="flex justify-center px-2 py-6">
        <span className="text-3xl xl:text-4xl 2xl:text-5xl text-vp-yellow-500 font-serif text-shadow cursor-default">Video Poker</span>
      </div>
      <div className="col-span-3 flex justify-center items-center bg-vp-dark-blue px-4">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-md">
          <Table bet={bet}/>

          <div className="flex py-4 invisible">
            <span className="text-5xl font-bold tracking-wider text-vp-red stroke-yellow cursor-default">
              GAME OVER
            </span>
          </div>

          <span className="grid grid-cols-5 gap-2 w-full justify-between text-black mb-16">
            {vp.get_hand().hand.map((card, i) => (<Card rank={card.face_value} suit={card.suit} onClick={() => update_card(i)}/>))}
          </span>

          <div className="flex flex-row w-full justify-between text-4xl font-bold tracking-wider text-vp-red py-4 cursor-default">
            <span className="stroke-yellow">BET {bet}</span>
            <span className="stroke-yellow">CREDITS {5}</span>
          </div>
          
          <div className="self-end grid grid-cols-5 gap-2 w-full pb-4">
            <Button label="HELP"/>
            <Button label="LOWER BET" onClick={() => setBet(vp.dec_bet())}/>
            <Button label="BET ONE" onClick={() => setBet(vp.inc_bet())}/>
            <Button label="BET MAX" onClick={ () => setBet(vp.set_bet(5))}/>
            <Button label="DRAW/DEAL"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
