import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TableShow } from './container/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TableShow/>
    </div>
  )
}

export default App
