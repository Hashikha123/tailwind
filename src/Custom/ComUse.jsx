import React, { useState } from 'react'
import InputCom from './InputCom'

function ComUse() {
    const[data,setData]=useState({
        name:'',
        option:'',
        hockey:false,
        football:false,
        date:  new Date().toISOString().split('T')[0]
    })
    const handleInput=(name,value)=>{
  
       
        setData({...data,[name]:value})
    }
    const handleSubmit=()=>{
        console.log(data)

    }
  return (
    <div>
      <InputCom type="text" name="name" value={data.name} onChange={(value)=>handleInput("name",value)}/>
      <InputCom type="radio"  name="option" value="male" checked={data.option==="male"} onChange={()=>handleInput('option','male')}/>Male
      <InputCom type="radio" name="option" value="female" checked={data.option==="female"} onChange={()=>handleInput('option','female')}/>Female

      <InputCom type="checkbox" name="hockey" checked={data.hockey} 
              onChange={(value) => handleInput(value,'hockey')}
              />Hockey
      <InputCom type="checkbox" name="football" checked={data.football} 
              onChange={(value) => handleInput(value,'football')}
              />Football

            <InputCom type="date" value={data.date} onChange={(value)=>('date',value)}/>  



      <button className='p-2 bg-blue-400' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ComUse
