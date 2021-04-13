import React, { useState } from 'react';
import Button from './components/Button';
import Table from './components/Table';
import Card from './components/Card';
import VideoPoker from './VideoPoker';

function App() {
  const [vp] = useState(new VideoPoker(200))
  const [hand, setHand] = useState(vp.get_hand().hand)
  const [bet, setBet] = useState(vp.get_bet())
  const [money, setMoney] = useState(vp.get_money())
  const [held, setHeld] = useState([false, false, false, false, false])
  const [drawing, setDrawing] = useState(true)
  const [title, setTitle] = useState('')

  function update_card(index: number) {
    let heldCopy = held
    heldCopy[index] = !heldCopy[index]
    setHeld([...heldCopy])
  }

  const deal = () => {
    setHand([...vp.reset_hand()])
    setDrawing(true)
  }

  const draw = () => {
    console.log(held.flatMap((val, i) => val ? [i] : []))
    let out = vp.play(held.flatMap((val, i) => val ? [i] : []))
    setTitle(out.hand_type)
    setHand([...out.hand])
    setDrawing(false)
    setHeld([false, false, false, false, false])
    setMoney(vp.get_money())
  }

  const renderCards = () => {
    return hand.map((card, i) => (<Card rank={card.face_value} suit={card.suit} held={held[i]} onClick={() => update_card(i)}/>)).reverse()
  }

  return (
    <div className="grid grid-cols-5 h-full bg-vp-blue">
      <div className="flex justify-center px-2 py-6">
        <span className="text-3xl xl:text-4xl 2xl:text-5xl text-vp-yellow-500 font-serif text-shadow cursor-default">Video Poker</span>
      </div>
      <div className="col-span-3 flex justify-center items-center bg-vp-dark-blue px-4">
        <div className="flex flex-col justify-center items-center w-full max-w-screen-md">
          <Table bet={bet}/>

          <div className={"flex py-4" + (drawing ? ' invisible' : '')}>
            <span className="text-5xl font-bold tracking-wider text-vp-red stroke-yellow cursor-default">
              {title ? title : 'GAME OVER'}
            </span>
          </div>

          <span className="grid grid-cols-5 gap-2 w-full justify-between text-black mb-16">
            {renderCards()}
          </span>

          <div className="flex flex-row w-full justify-between text-4xl font-bold tracking-wider text-vp-red py-4 cursor-default">
            <span className="stroke-yellow">BET {bet}</span>
            <span className="stroke-yellow">CREDITS {money}</span>
          </div>
          
          <div className="self-end grid grid-cols-5 gap-2 w-full pb-4">
            <Button label="HELP"/>
            <Button label="LOWER BET" onClick={() => setBet(vp.dec_bet())} />
            <Button label="BET ONE" onClick={() => setBet(vp.inc_bet())} />
            <Button label="BET MAX" onClick={() => setBet(vp.set_bet(5))} />
            {drawing ? (
              <Button label="DRAW" onClick={draw} />
            ) : (
              <Button label="DEAL" onClick={deal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
