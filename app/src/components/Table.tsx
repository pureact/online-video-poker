import React from 'react'

type TableProps = {
  bet: number,
}

function Table({ bet }: TableProps) {
  const labels = ["ROYAL FLUSH", "STRAIGHT FLUSH", "FOUR OF A KIND", "FULL HOUSE", "FLUSH", "STRAIGHT", "THREE OF A KIND", "TWO PAIR", "JACKS OR BETTER"]
  const ratios = [250, 50, 25, 9, 6, 4, 3, 2, 1]
  const bets = [1,2,3,4,5]
  const bet_table: JSX.Element[] = []

  bets.forEach(bet_val => {
    const rows: JSX.Element[] = []
    const main_classes = "flex flex-col w-full text-right font-bold p-3 py-1 text-vp-yellow-500"

    ratios.forEach(ratio => {
      const value = bet_val === 5 && ratio === 250 ? 4000 : bet_val*ratio
      rows.push(
        <span>
          {value}
        </span>
      )
    })

    let variable_classes = bet === bet_val ? "bg-vp-red" : ""
    switch (bet) {
      case 1:
        variable_classes += " rounded-l-lg"
        break
      case 5:
        variable_classes += " rounded-r-lg"
        break
    }

    bet_table.push(
      <div className={`${main_classes} ${variable_classes}`}>
        {rows}
      </div>
    ) 
  });

  return (
    <div className="flex flex-row w-full bg-vp-yellow-500 rounded-lg px-4 py-2 shadow cursor-default">
      <div className="flex flex-col justify-between font-bold pl-1 py-1 pr-6">
        {labels.map((label) => (<span>{label}</span>))}
      </div>
      <div className="flex flex-row flex-grow bg-vp-blue rounded-lg">
        {bet_table}
      </div>
    </div>
  )
}

export default Table
