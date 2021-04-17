import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  label: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

function Button({ label, onClick }: ButtonProps) {
  const responsiveClasses = " px-2 py-2 text-sm lg:text-base xl:text-lg"
  return (
    <button
      className={"flex justify-center items-center bg-vp-yellow-500 rounded-lg font-bold shadow hover:bg-vp-yellow-600 active:bg-vp-yellow-500 focus:outline-none" + responsiveClasses}
      onClick={onClick}
    >
      { label }
    </button>
  )
}

export default Button