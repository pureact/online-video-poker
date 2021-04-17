import React, { useState, useEffect } from 'react';
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
  const [gained, setGained] = useState(0)
  const [modalOpen, setModal] = useState(false)

  // check if mobile
  const [width, setWidth] = useState<number>(window.innerWidth)
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  const screenSmall: boolean = (width <= 920)

  // functions
  function update_card(index: number, drawing: boolean) {
    if (drawing) {
      let heldCopy = held
      heldCopy[index] = !heldCopy[index]
      setHeld([...heldCopy])
    }
  }

  const deal = () => {
    setHand([...vp.reset_hand()])
    setDrawing(true)
  }

  const draw = () => {
    if(vp.get_money() < vp.get_bet()) {
      alert("You don't have enough money to make that bet.")
      return
    }
    const heldIndices = [...held.keys()].filter(i => held[i])
    const out = vp.play(heldIndices)
    setTitle(out.hand_type)
    setHand([...out.hand])
    setDrawing(false)
    setHeld([false, false, false, false, false])
    setMoney(vp.get_money())
    setGained(out.gained)
    if(vp.get_money() <= 0) {
      alert("You ran out of credits. Here's another 200!")
      setMoney(vp.set_money(200))
    }
  }

  const renderCards = () => {
    return hand.map((card, i) => (
      <Card key={`card${i}`} rank={card.face_value} suit={card.suit} held={held[i]} onClick={() => update_card(i, drawing)} />
    ))
  }

  return (
    <div className="h-full">
      {screenSmall ? (
        <div className="flex justify-center items-center h-full bg-vp-blue">
          <div className="flex flex-col max-w-screen-md text-black bg-white rounded-lg shadow-lg p-8">
            <span className="text-4xl font-bold pb-4">Sorry!</span>
            <span className="text-lg">Your browser must be wider than 920px to play our game.</span>
            <span className="text-lg">Please consider using a larger window or a different device.</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-5 h-full bg-vp-blue">
          <div className="flex justify-center px-2 py-6">
            <span className="text-3xl xl:text-4xl 2xl:text-5xl text-vp-yellow-500 font-serif text-shadow cursor-default">Video Poker</span>
          </div>
          <div className="col-span-3 flex justify-center items-center bg-vp-dark-blue px-4">
            <div className="flex flex-col justify-center items-center w-full max-w-screen-md">
              <Table bet={bet} />

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
                <span className="stroke-yellow">CREDITS {money} ({gained})</span>
              </div>
              
              <div className="self-end grid grid-cols-5 gap-2 w-full pb-4">
                <Button label="HELP" onClick={() => setModal(!modalOpen)} />
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
      )}

      {modalOpen ? (
          <div
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={() => setModal(!modalOpen)}
          >
            <div className="flex flex-col p-10 w-full max-w-screen-md rounded-lg shadow-lg bg-white cursor-default">
              <div className="flex flex-row justify-between items-end">
                <span className="font-bold tracking-wide text-3xl">INSTRUCTIONS</span>
                <span className="text-sm pb-1 animate-pulse">Click or tap anywhere to close...</span>
              </div>
              <hr className="mt-2 mb-4" />
              <div className="h-modal overflow-y-auto">
                <p className="font-bold text-xl py-4">Getting Started 🚀</p>
                <p className="pb-2">Welcome to Online Video Poker! Video poker is a casino game based on five-card draw poker. It's usually played on a machine similar in size to a slot machine but we've hosted our online web version  here for you to enjoy. In Video Poker, there is no dealer's hand or no other player's hand to beat; payoffs are done strictly according to a posted pay table. The lowest winning hand is a pair of jacks or better (a pair of queens, kings, or aces).</p>
                <p className="pb-2">In our online version, you start out with 5 cards already dealt to you. You may click or tap on a card to hold it if you believe it to be beneficial. You may also modify your bet by using the <b>BET ONE</b>, <b>BET MAX</b> and <b>LOWER BET</b> buttons at the bottom of the screen. These increment, set the bet to the maximum of 5, and decrement the bet, respectively. When you feel satisfied, you may hit the <b>DRAW</b> button to play the round. Cards which you did not to choose to hold will be replaced and your poker hand ranking will be determined from the remaining cards in play. You will gain (or lose) credits based on the pay table at the top of the screen if your hand matches any of the rankings.</p>
                <p className="pb-2">That's it! You've played a round of Video Poker 🥳 Afterwards, you can press the <b>DEAL</b> button to get a new hand of cards and start a new round.</p>
                <p className="font-bold text-xl py-4">Poker Hand Rankings 🤑</p>
                <p className="pb-4">All payoffs are based on five-card poker hands, which rank as follows:</p>
                <div className="pl-6">
                  <p className="pb-2"><b>👑 ROYAL FLUSH:</b> Ace-king-queen-jack-10, all of the same suit.</p>
                  <p className="pb-2"><b>🌊 STRAIGHT FLUSH:</b> Five consecutive cards of the same suit.</p>
                  <p className="pb-2"><b>4️⃣ FOUR OF A KIND:</b> Four cards of the same rank.</p>
                  <p className="pb-2"><b>🏠 FULL HOUSE:</b> Three cards of one rank, two cards of another rank.</p>
                  <p className="pb-2"><b>🚽 FLUSH:</b> Five cards of the same suit.</p>
                  <p className="pb-2"><b>🧱 STRAIGHT:</b> Five consecutive cards of mixed suits.</p>
                  <p className="pb-2"><b>3️⃣ THREE OF A KIND:</b> Three cards of the same rank.</p>
                  <p className="pb-2"><b>📦 TWO PAIR:</b> Two cards of one rank, two cards of another rank.</p>
                  <p className="pb-2"><b>🏰 JACKS OR BETTER:</b> Two jacks, queens, kings, or aces.</p>
                </div>
                <p className="font-bold text-xl py-4">Contributors 🎉</p>
                <p className="pb-2">👨🏻‍🎤 Matthew O'Neill - Game Logic, Nick's personal QA</p>
                <p className="pb-2">🧔🏻 Nicolas El-Khoury - Backend Beardo</p>
                <p className="pb-2">🐱‍👤 Vinh Nguyen - Frontend Ninja</p>
                <p className="pb-4 hover:text-vp-red"><a href="https://github.com/naek2k/online-video-poker">👉 Github</a></p>
                <p className="pb-12" />
              </div>
            </div>
          </div>
        ) : ('')}
    </div>
  );
}

export default App;
