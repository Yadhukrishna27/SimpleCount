import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <h1 className='text-light'>Counter App</h1>
      <Counter />
    </>
  )
}

export default App
