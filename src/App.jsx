import { useState } from 'react'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import VideoPage from './component/VideoPage'

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomePage />
  },
  {
    path:'/room/:id',
    element:<VideoPage/>
  }
])
  return (
    <>
      <div className="App">
          <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
