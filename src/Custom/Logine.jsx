import React, { useState } from 'react'
import InputField from './InputField'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logine() {
    const[from,setFrom]=useState({
        username:'',
        password:'',
       
    })
    const[loading,setLoading]=useState(false)
    const handleInput=(name,value)=>{
        setFrom({
            ...from,[name]:value
        })
    }        
const handleClick=(e)=>{
    e.preventDefault();
    setLoading(true)

    let resiveRes = false
    const timeOut = setTimeout(()=>{
        if(!resiveRes){
            toast.error("Response not found", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000, // Adjust the autoClose duration as needed
              });
            // console.log("response not found")
            setLoading(false)
        }

    },10000)
    
    axios({
        method:'post',
        url:'http://192.168.1.57:4000/api/login',
        data:from
    })
    .then((res)=>{
        clearTimeout(timeOut)
        const {token}= res.data
        localStorage.setItem('token', token)

        console.log("token",token) 
        setLoading(false)
        resiveRes=true;
    })
    .catch((error)=>{
        clearTimeout(timeOut)
        setLoading(false)
        console.log("error",error.message)
    })
    // console.log(from )
}
    return (
        <div className='flex flex-col items-center justify-center px-6 py-8 md:h-screen  lg:py-0 mx-auto bg-gray-50'>
            <div>
            <ToastContainer />

            <div className='w-full bg-white border-gray-700 rounded-sm'>
                <div className='p-4 space-y-2 md:space-y-4 sm:p-10'>
                    <h1 className='text-xl font-bold text-gray-900 md:text-2xl text-center'>Log In</h1>
                    <div>
                    <InputField type="email" value={from.username} name="username" placeholder="your name" onChange={(value)=>handleInput('username',value)}/>
                </div>
                <div>
                    <InputField type="number" value={from.password} name="password" placeholder="your password" onChange={(value)=>handleInput('password',value)}/>
                </div>
                <div>
                    <InputField type="checkbox" label="Forget Password"/>
                </div>

                <button
                className={`p-2 w-full text-white bg-blue-600 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={handleClick}
                >
                {loading ? (
                    <div className='flex items-center'>
                        <i className='animate-spin rounded-full h-6 w-8 mr-2 border-t-2 border-b-2 border-gray-900'></i>Submit

                    </div>

                ) :
                 (
                    'submit'
                )}
                </button>

              
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Logine
