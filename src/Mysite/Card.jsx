import React from 'react'

function Card() {
  return (
    <div className=' '>
      <div>
        <ul className=' bg-white font-bold text-xl p-2 flex justify-between items-center'>
          <div >
          <h2 className='text-xl'>Get in Touch</h2> 
          {/* <p>Be positive</p> */}
          </div>
          <div className='flex   space-x-8'>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          </div >
          <div className="mr-12">
          <button className='border-solid border-2  border-black p-2'>Touch with us</button>
          </div>

        </ul>
      </div>


      <a href="/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>


      {/* <div className='overflow-y-hidden'>
<img src="https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
style={{
  width: '100%', 
  height: '100%', 
  overflow:'hidden',
  maxWidth: '100vw',
}}
className='overflow-y-hidden'
alt="..." />
<p>Nic to Meet you</p>

</div> */}
    </div>
  )
}

export default Card
