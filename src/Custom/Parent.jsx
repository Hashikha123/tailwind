import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import axios from 'axios'

const graph = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 7800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }

];
function Parent() {

 const[apis,setApis]=useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selected: '',
    select:'option1',
    hockey:true,
    football:false,
    date: new Date().toISOString().split('T')[0]
  });
useEffect(()=>{
  axios({
    method:'get',
    url:'http://localhost:4000/drop'
  })
  .then((res)=>{
    const data=res.data
    setApis(data)

    console.log("Api data",data)
    
  })
  .catch((error)=>{
    console.log(error)
  })
},[])

  const handleFieldChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField name="Name: " type="text" placeholder="your name" value={formData.name} onChange={(value) => handleFieldChange('name', value)} />
        <InputField name="Email: " type="email" placeholder="your Email" value={formData.email} onChange={(value) => handleFieldChange('email', value)} />

          <InputField name="Gender" label="Male"  type="radio" value='option1' checked={formData.selected==='option1'} onChange={()=>handleFieldChange('selected','option1')}/>
              <InputField label="Female"  type="radio" value='option2' checked={formData.selected==='option2'} onChange={()=>handleFieldChange('selected','option2')}/>


        <InputField name="chosse Data" label='hockey' type='checkbox' onChange={(value)=>handleFieldChange('hockey',value)} value={formData.hockey}/>
        <InputField label='football' type='checkbox' onChange={(value)=>handleFieldChange('football',value)} value={formData.football}/>
        <InputField name="Select Date" type="date" value={formData.date} onChange={(value) => handleFieldChange('date', value)} />
        <InputField type="dropdown" options={apis} value={formData.value} onChange={(value)=> handleFieldChange('select',value)}/>
        <InputField type="chart" data={graph} width={500} height={300} activeBarColor="pink"/>
        <button type='submit' className='p-2 text-white bg-black rounded-md'>Submit</button>
      </form>
    </div>
  );
}

export default Parent;
