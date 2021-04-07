import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  label: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center bg-vp-yellow-500 rounded-lg px-8 py-3 text-2xl font-bold shadow hover:bg-vp-yellow-600 active:bg-vp-yellow-500 focus:outline-none"
      onClick={onClick}
    >
      { label }
    </button>
  )
}

export default Button
