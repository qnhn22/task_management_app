import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
