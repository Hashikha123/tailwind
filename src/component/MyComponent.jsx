import React, { useState } from 'react'
import InputBox from './InputBox'

function MyComponent() {
  const [data,setData]=useState({
    name:'',
    lname:'',
    contact:'',
    option:''
  })
  const handleInput=(name,value)=>{
    setData({
      ...data,[name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <InputBox type='text' name='name' value={data.name}  onChnage={(value)=>handleInput('name',value)} />
      <InputBox type='text' name="lastname" value={data.lname} onChange={(value)=>handleInput('lname',value)} />
      <InputBox type="number" name="contact" value={data.contact} onChange={(value)=>handleInput('name',value)}/>
      <InputBox name="Gender" type="radio" label="male" value='option1' checked={data.option==='option1'} onChange={(value)=>handleInput('option',value)} />
      <InputBox type="radio" label="female" value='option2' checked={data.option==='option2'} onChange={(value)=>handleInput('option',value)} />
      </form>
     </div>
  )
}

export default MyComponent















// import React, { useState } from 'react';
// import InputBox from './InputBox';

// function MyComponent() {
//   const [formData, setFormData] = useState({
//     favoriteLanguages: [],
//   });

//   const handleInput = (value) => {
//     const selectedLanguages = [...formData.favoriteLanguages];

//     if (selectedLanguages.includes(value)) {
//       selectedLanguages.splice(selectedLanguages.indexOf(value), 1);
//     } else {
//       selectedLanguages.push(value);
//     }

//     setFormData({
//       ...formData,
//       favoriteLanguages: selectedLanguages,
//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData.favoriteLanguages);
//   }

//   const languageOptions = [
//     { label: 'JavaScript', value: 'js' },
//     { label: 'Python', value: 'python' },
//     { label: 'Java', value: 'java' },
//     { label: 'Ruby', value: 'ruby' },
//   ];

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <InputBox
//           heading="Choose your favorite programming languages"
//           options={languageOptions}
//           selectedOptions={formData.favoriteLanguages}
//           onChange={handleInput}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default MyComponent;
