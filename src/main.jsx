import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import Get from './Get.jsx'
// import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import About from './RoterCrash/About/About.jsx'
// import Home from './RoterCrash/Home/Home.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element: <Home/>
//       } , 
//       {
//         path:'about',
//         element: <About/>
//       }
//     ]
//   }
// ])




// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route path="/" element={<Layout/>} >
// <Route path="" element={<Home/>}/>
// <Route path="about" element={<About/>}/>


//   </Route>
// )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Get/> */}
    <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
