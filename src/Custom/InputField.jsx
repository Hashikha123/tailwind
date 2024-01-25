import React from 'react';
import Select from 'react-select'
// import { Bar } from 'react-chartjs-2';
import {Bar, BarChart, CartesianGrid, Rectangle, Tooltip, XAxis, YAxis,ResponsiveContainer} from 'recharts'


function InputField({ label,name, placeholder, type, onChange,value,checked,onClick,options,data,activeBarColor }) {
  const handleChng = (e) => {
    if (type === 'date') {
      const formattedDate = new Date(e.target.value).toISOString().split('T')[0];
      onChange(formattedDate);
    } 
    else if(type === 'checkbox') {
      onChange(e.target.checked); 
    }
    else{
onChange(e.target.value)
    }
  };

  return (

    <div className=''>
    
      <label  className="leading-7 text-md font-bold font-sans text-grey-600">{name}</label>

        {type === 'text' && (
          <input
            type='text'
            value={value}
            onChange={handleChng}
            placeholder={`Enter ${placeholder}`}
            className="InputArea"
          />
        )}
        {type === 'email' && (
          <input
            type='email'
            value={value}
            onChange={handleChng}
            placeholder={`Enter ${placeholder}`}
            className="InputArea"
          />
        )}
        {type==='number' && (
          <input
          type='number'
          value={value}
          onChange={handleChng}
          placeholder={`Enter ${placeholder}`}
          className="InputArea appearance-none"
        />
        )}
        {type ==='password' && (
          <input 
          type="password"
          value={value}
          onChange={handleChng}
          placeholder={`Enter ${placeholder}`}
          className='InputArea '
          />
        )}
        {type === 'radio' && (
          <div>
            <input
              type='radio'
              value={value}
              checked={checked}
              onChange={handleChng}
              className='w-4 h-4 text-blue-600 bg-gray-100  '
            />
                <label className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">{label}</label>

        
          </div>
        )}
      {type==='checkbox' && (
<div>
          <input type='checkbox'
          onChange={handleChng}
          value={value}
          // checked={value}
          className='w-4 h-4 text-blue-600 bg-gray-100 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600'
          /> <label >{label}</label>
          </div>
        )}

            {type === 'date' && (
          <input
            type='date'
            value={value}
            onChange={handleChng}
            className=' rounded-sm shadow-sm ml-2 m-4 border-gray-800 focus:border-indigo-500 p-2'
          />
        )}
        {type==='submit' &&(
        //    <div>
        //    <button
        //      className={`bg-blue-500 text-white rounded px-4 py-2 ${
        //        loading ? 'opacity-50 pointer-events-none' : ''
        //      }`}
        //      onClick={onClick}
        //      disabled={loading}
        //    >
        //      {loading ? (
        //        <div className="flex items-center">
        //          <i className="animate-spin mr-2 fas fa-spinner"></i> Submitting...
        //        </div>
        //      ) : (
        //        'Submit'
        //      )}
        //    </button>
        //  </div>
          <button type='submit' className='p-2 text-white w-full rounded-md bg-blue-700' onClick={onClick}>Submit</button>
        )}
{type==='dropdown' && (
  <Select 
  type="dropdown"
  options={options.map(item =>({value: item.id , label: item.name}))}
  value={value}
  onChange={onChange}

  />

)}

 {type==='chart' && (
      <ResponsiveContainer width="100%" height={400}>

<BarChart 
data={data}
// style={{maxWidth:'550px', maxHeight:'500px'}}
height={300}
width={500}

margin={{
  top: 5,
  right: 30,
  left: 20,
  bottom: 5,
}}

>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill={activeBarColor} stroke='pink'/>}/>
<Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill={activeBarColor} stroke='green'/>}/>


</BarChart>
</ResponsiveContainer>
 )}       
      </div>
    
  

  );
}

export default InputField;
