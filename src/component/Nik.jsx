import React from 'react'

function Nik({name,value,onChange}) {
    const handleChng=(e)=>{
        onChange(e.target.value)
    }
  return (
    <div>
      <div>
        <label >{name}</label>
        <input type="text"
        value={value}
        onChange={handleChng}
        className='border-2'

        />
      </div>
    </div>
  )
}

export default Nik
