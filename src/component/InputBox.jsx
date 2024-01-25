import React from 'react'

function InputBox({name,value,onChange,type,checked,label}) {
  const handleChng=(e)=>{
    onChange(e.target.value)
  }
  return (
    <div>
      <div>
        <label className='leading-7 font-bold text-sm' >{name}</label>
        {type==='text' && (
          <input
           type='text' 
           value={value}
            onChange={handleChng} 
          className='border-2 focus:outline-indigo-400'/>
        )}
      {type==='number' && (
        <input type='number' value={value} onChange={handleChng}  className='border-2 focus:outline-indigo-400'/>
      )}
{type==='radio' && (
  <div>
  <input type="radio"
  value={value}
  onChange={handleChng}
  checked={checked}
  /> {label}
  </div>
)}
      </div>
    </div>
  )
}

export default InputBox





// import React from 'react';

// function InputBox({ heading, options, selectedOptions, onChange }) {
//   return (
//     <div>
//       <p>{heading}</p>
//       {options.map((option) => (
//         <div key={option.value}>
//           <input
//             type="checkbox"
//             value={option.value}
//             checked={selectedOptions.includes(option.value)}
//             onChange={() => onChange(option.value)}
//           />
//           <label>{option.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InputBox;
