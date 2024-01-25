import React, { useState } from 'react'

function MultipleUpload() {
    const[files,setFiles]=useState()

    const handleChng=(e)=>{
     setFiles(e.target.files)       
    }
    const handleSubmit=()=>{
        const formData = new FormData();
        for(let i = 0; i < files.lenght; i++){
            formData.append(`images[${i}]`,files[0])
        }
        fetch('https://httpbin.org/post',{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err=> console.log(err))
    }
  return (
    <div>
      <input type='file' multiple onChange={handleChng}/>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  )
}

export default MultipleUpload
