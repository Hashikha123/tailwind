import React, { useState } from 'react'
import Pro from './Pro'

function FPro() {
    const[data,setData] = useState({
        name:''
    })
    const handleInput=(name,value)=>{
        setData({
            ...data,[name]:value
        })
    }
    const handleSubmit=()=>{
        console.log(data)
    }
  return (
    <div>
      <Pro name="name" value={data.name} onChange={(value)=>handleInput("name",value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default FPro
