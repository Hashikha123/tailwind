import axios from 'axios'
import React, { useState } from 'react'

function Next() {
    const[tData,setData]=useState()
    const HandleSee=()=>{
        const token=localStorage.getItem('token')
        if(!token){
            setData("token missing")
        }

        axios({
            method:'get',
            url:'http://192.168.1.57:4000/api/checkToken',
            headers:{
                Authorization:`Bearer ${token}`
            }
            
        })
        .then((res)=>{
        if(res.status===200){
            setData("verify sucessfully")
        }
        else{
            setData("validation fail")
        }
    })
        .catch((error)=>
        console.log(error)
        )
    }
  return (
    <div>
      <button className='p-2 bg-red-700 text-white' onClick={HandleSee}>See Data </button>
      <p className='text-2xl font-bold'>{tData}</p>
    </div>
  )
}

export default Next
