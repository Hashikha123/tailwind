import React from 'react'

function Pro({name,value,onChange}) {
    const handleChng=(e)=>{
        onChange(e.target.value)
    }
  return (
    <div>
      <label>{name}</label>
      <input type="text" 
      value={value}
      onChange={handleChng}
      className='border-2 outline-blue-400'
      />
    </div>
  )
}

export default Pro
