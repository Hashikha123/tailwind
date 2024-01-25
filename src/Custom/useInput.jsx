import React, { useState } from 'react'

function useInput(initialValue=0) {
  const[count,setCount]=useState(initialValue)
  const Increment=()=>{
    setCount(count+1)
  }
  const Decrement=()=>{
    setCount(count-1)
  }
  return[count,Increment,Decrement]

}

export default useInput




// import { useState } from 'react';

// function useInput(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return {
//     value,
//     onChange: handleChange,
//     reset: () => setValue(''),
//   };
// }

// export default useInput;
