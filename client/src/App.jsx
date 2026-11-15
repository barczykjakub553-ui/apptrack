import { useState } from 'react'
import './App.css'

function Button({count, onIncrement}) {
  return <button
      type="button"
      className="counter"
      onClick={onIncrement}>
        <p>{count === 0 ? "Nothing was sent!" : `Applications sent: ${count}`}</p>
    </button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="centerC">
          <Button count={count} onIncrement={() => setCount(c => c + 1)} />
        </div>
      </section>
    </>
  )
}

export default App
