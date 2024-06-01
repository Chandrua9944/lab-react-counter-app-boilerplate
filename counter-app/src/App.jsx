import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <div className="card-body">
          {count}
        </div>
        <button className='btn' onClick={()=>setCount((count)=>count+1)}>+</button>
        <button className='btn' onClick={()=>setCount((count)=>count-1)}>-</button>
        <button className='btn' onClick={()=>setCount(()=>0)}>Reset</button>
      </div>
    </>
  )
}

export default App