import React, {useState} from 'react'

type CardProps = {
  rank: string,
  suit: string,
}

function Card({ rank, suit }: CardProps) {
  const [showHold, setShowHold] = useState(false);
  const onClick = () => showHold ? setShowHold(false) : setShowHold(true)

  //pain
  let variable_classes = "";
  if(rank === "10"){
    variable_classes += " px-4"
  }
  else{
    variable_classes += " px-6"
  }

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

  const Hold = () => (
    <div className="flex flex-col items-center text-4xl font-bold text-vp-red stroke-yellow">
      HOLD
    </div>
  );

  return (
    <div>

      { showHold ? <Hold/> : <div className="m-10"></div>}

      <button className="flex flex-col w-40 h-56 rounded-lg bg-vp-white mx-3" onClick={onClick}>
        <div className={"flex h-1/4 items-end text-4xl font-bold" + variable_classes + suit_color}>
          {rank}
        </div>
        <div className={"flex h-1/4 px-5 text-5xl" + suit_color}>
          {suit}
        </div>
        <div className={"flex justify-center items-center h-1/2 text-9xl" + suit_color}>
          {suit}
        </div>
        
      </button>
    </div>
  )
}

export default Card
