import { useState } from 'react'
import './App.css'

import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

function App() {

  const [update, setUpdate] = useState([]);

  const onUpdate = (data) => {
    setUpdate([data, ...update]);
  }
  console.log(update)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onUpdate={onUpdate} />}></Route>
      </Routes>
    </>
  )
}

export default App
