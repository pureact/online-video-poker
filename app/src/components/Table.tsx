import React from 'react'

type TableProps = {
  bet: number, // or col, or index. feel free to change it
}

function Table({ bet }: TableProps) {
  const labels = ["ROYAL FLUSH", "STRAIGHT FLUSH", "FOUR OF A KIND", "FULL HOUSE", "FLUSH", "STRAIGHT", "THREE OF A KIND", "TWO PAIR", "JACKS OR BETTER"]
  const ratios = [250, 50, 25, 9, 6, 4, 3, 2, 1]
  const bets = [1,2,3,4,5]
  let bet_table: any[] = []

  bets.forEach(bet_val => {
    let rows: any[] = []
    let bet_table_classes = "flex-col text-right font-bold w-20 pr-3 py-1 text-vp-yellow-500"
    ratios.forEach(ratio => {
      let value = bet_val === 5 && ratio === 250 ? 4000 : bet_val*ratio
      rows.push(<div>{value}</div>)
    })
    if (bet == bet_val) {
      bet_table_classes += " bg-vp-red"
    }
    if (bet == 1) {
      bet_table_classes += " rounded-l-lg"
    }
    if (bet == 5) {
      bet_table_classes += " rounded-r-lg"
    }
    bet_table.push(<div className={bet_table_classes}>{rows}</div>) 
  });

  return (
    <div className="flex bg-vp-yellow-500 rounded-lg px-4 py-2 shadow">
      <div className="flex-auto">
        <div className="flex-col font-bold py-1">
          {labels.map((label) => {
            return <div className="flex-auto">{label}</div>
          })}
        </div>
      </div>
      <div className="flex-auto bg-vp-blue rounded-lg ml-20">
        <div className="flex">
          {bet_table}
        </div>
      </div>
    </div>
  )
}

export default Table
