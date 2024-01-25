import React from 'react'
import InputField from './InputField'

function FromLay() {
    return (
        <div className='w-full '>
            <form className='w-full border-2'>
                <div className='text-shadow-md '>
                    <h2 className=' font-bold text-center text-xl text-gray-600 '>Registration From</h2>
                </div>
                <div className="flex flex-wrap mx-10 mb-3">

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <InputField type="text" name="FirstName" placeholder="your name" />
                    </div>
                    <div className='w-full md:w-1/2 md:mb-0'>
                        <InputField type="text" name="lastName" placeholder="your Last name" />
                    </div>

                </div>

                <div className="flex flex-wrap mx-10 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <InputField name="Email" type="email" placeholder="you email" />
                    </div>
                    <div className='w-full md:w-1/2 md:mb-0'>
                        <InputField name="contact" type="number" placeholder="your Contact" />
                    </div>

                </div>

                <div className="flex flex-wrap mx-10 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <InputField type="radio" label="male" name="Gender" />
                        <InputField type="radio" label="Female"  />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <InputField type="date" name="Date of Birth"/>
                    </div>

                </div>
<div className='flex justify-end'>
    <InputField type="submit" />
</div>
                {/* <div className='flex justify-end mx-10'>
                    <button className='p-2 text-white bg-blue-600 rounded-md '>Submit</button>
                </div> */}
            </form>
        </div>
    )
}

export default FromLay
