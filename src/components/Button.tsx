import React from 'react'

interface Props{
    children:string,
    color?:'primary'|'secondary'|'danger',
    onClick:()=>void
}

export const Button = ({children,color, onClick}:Props) => {
  return (
    <button type='button' className={`btn btn-${color}`} onClick={onClick}>{children}</button>
  )
}
