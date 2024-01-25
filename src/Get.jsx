import React from 'react'

function Get() {
  return (
    <div>
         <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sello/>} />
      <Route path='/next' element={<Next/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Get
