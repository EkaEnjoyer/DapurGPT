import { useState } from 'react'
import './App.scss'
import QnA from './components/QnA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QnA/>
    </div>
  )
}

export default App
