import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import WebsiteLayout from './layout/WebsiteLayout'
import HomePage from './page/HomePage'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={< WebsiteLayout/>} >
              <Route index  element={<HomePage/>} />
          </Route>

        </Routes>
    </>
  )
}

export default App
