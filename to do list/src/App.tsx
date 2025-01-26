import './global.css'
import './app.css'
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react'

import { Header } from './Components/Header/Header'
import { HeaderTasks } from './Components/Header Task/HeaderTask'


function App() {

  return (
    <>
    <div className='container'>
      <Header/>
      <HeaderTasks/>
    </div>
    </>
  )
}

export default App
