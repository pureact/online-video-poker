import React from 'react'

type CardProps = {
  rank: string,
  suit: string,
  held: boolean,
  onClick: Function,
}

function Card({ rank, suit, held, onClick }: CardProps) {
  let suit_color = "";
  if(suit === "H" || suit === "D"){
    suit_color = " text-red-600";
    if(suit === "H"){
      suit = "♥";
    }
    else{
      suit = "♦";
    }
  }
  else{
    if(suit === "S"){
      suit = "♠";
    }
    else{
      suit = "♣";
    }
  }

  switch(rank){
    case "11":
      rank = "J";
      break;
    case "12":
      rank = "Q";
      break;
    case "13":
      rank = "K";
      break;
    case "14":
      rank = "A";
      break;
  }

  const Hold = () => {
    let classes = "flex flex-col items-center text-4xl font-bold text-vp-red stroke-yellow pb-3"
    classes += held ? "" : " invisible"
    
    return (
      <div className={classes}>
        HOLD
      </div>
    )}

  return (
    <div className="flex flex-col justify-center">
      <Hold/>
      <div className={"grid grid-rows-2 rounded-lg bg-vp-white shadow p-4 transform-gpu duration-300 hover:-translate-y-2 hover:scale-105 active:-translate-y-1 active:scale-100 cursor-pointer" + suit_color} onClick={() => onClick()}>
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center text-4xl font-bold">
            <span>{rank}</span>
            <span className="text-5xl">{suit}</span>
          </div>
          <div className="flex-grow"/>
        </div>
        <div className="flex justify-center items-center text-8xl">
          {suit}
        </div>
      </div>
    </div>
  )
}

export default Card
