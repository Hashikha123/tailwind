import React from 'react'
import useInput from './useInput'

function Tyre() {
  const [count,Increment,Decrement]=useInput(10)
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Tyre
