import React from 'react'

interface Props{
    name:string
}

export const Button = () => {
  return (
    <button type='button' className={`btn btn-${}`}></button>
  )
}
