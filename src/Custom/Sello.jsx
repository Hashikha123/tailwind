import React, { useState } from 'react'
import InputField from './InputField'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Sello() {
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false);

  const handleTo = (field, value) => {
    setData({
      ...data, [field]: value
    })
  }
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    let responseReceived = false; 

    const timeoutId = setTimeout(() => {
      if (!responseReceived) {
        toast.error("Response not found", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000, 
        });
        setLoading(false);
      }
    }, 10000);
    axios({
      method: 'post',
      url: 'http://192.168.1.57:4000/api/login',
      data: data
    })
      .then((res) => {
        clearTimeout(timeoutId);
        const { token } = res.data
        console.log('token', token)
        localStorage.setItem('token', token)
        setLoading(false)
        navigate('/next')
        responseReceived = true;
      })

      .catch((error) => {
      clearTimeout(timeoutId)
      setLoading(false);

      console.log("error", error)
  })
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className='block sm:hidden md:block'>
          <img src="https://images.pexels.com/photos/3892129/pexels-photo-3892129.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className='h-screen p-2'
            alt="..." />
        </div>
        <div className='bg-gray-200 flex justify-center items-center h-screen'>
        <ToastContainer/>

          <div className=' bg-white p-10 mx-auto'>

            <form action="" className=' mx-auto'>

              <div className='text-3xl font-bold text-center text-blue-600 '>Log In</div>

              <div className='mb-4'>
                <InputField type="text" placeholder="username" name="username" value={data.username} onChange={(value) => handleTo('username', value)} />
              </div>
              <div className='mb-4'>
                <InputField type="password" placeholder="password" name="password" value={data.password} onChange={(value) => handleTo('password', value)} />
              </div>
              <div className='mb-4 flex'>
                <InputField type="checkbox" label="forget password" />
                <span className='ml-auto'><a href='/'> Rember me</a></span>
              </div>

              <div>
                <button
                  className={`bg-blue-500 text-white rounded px-4 py-2 w-full ${loading ? 'opacity-50 pointer-events-none' : ''
                    }`}
                  onClick={handleSubmit}
                  
                >
                  {loading ? (
                    <div className="flex items-center">
                      <i className=" mr-2 animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 ml-[30%]"></i> Submit
                    </div>
                  ) : (

                    'Submit'
                  )}
                </button>
              </div>

              

              {/* <div className='mb-4 '>

                                   {loading ? (
                                 <div className='flex items-center justify-center'>
                                         <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mx-auto'></div>
                                   <div className='sr-only'>Loading...</div>
                                   </div>
                                    ):
                                    (
                                    <InputField type="submit" onClick={handleSubmit} disabled={!loading }/> 
                                   )}
                                  
                                </div> */}
              <div className='mb-4 '>

              </div>
              <div className='text-blue-400 text-md font-sans'>
                <a href="/">Sign in Another Account ?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Sello
