import React from 'react'

function InputCom({type,value,onChange,checked}) {
    const handleChng=(e)=>{

    if(type==='checkbox'){
   onChange(e.target.checked)
    }
    else if(type==='date'){
        const forData= new Date(e.target.value).toISOString().split('T')[0];
        onChange(forData)
    }
    else{
        onChange(e.target.value)
    }
    }
  return (
    <div>
        {type==="text" && (
            <input 
            type='text'
            value={value}
            onChange={handleChng}
            className='bg-gray-100 bg-opacity-50 border-gray-300 rounded border focus:border-indigo-500 leading-8 focus:bg-white duration-200 ease-in-out focus:ring-2 focus:ring-indigo-200 py-1 px-2 outline-none'
            />
        )}

        {type==="radio" && (
            <>
            <input 
            type="radio"
            value={value}
            onChange={handleChng}
            checked={checked}
            
            /> 
            </>
        )}

        {type==="checkbox" && (
            <div >
            <input 
            type='checkbox'
            onChange={handleChng}
            checked={value}
            />
            </div>
        )}
      {type==='date' && (
        <input 
        type='date'
        value={value}
        onChange={handleChng}
        />
      )}
    </div>
  )
}

export default InputCom
