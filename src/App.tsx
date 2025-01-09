import { useState } from "react"
import { useCounter } from "./store/use-counter";

function App() {
  const { count, increaseCount, decreaseCount, resetCount  } = useCounter();

  return (
    <>
      <h1>Welcome to Zustand!</h1>
      <div>
        <p>Quantidade: {count}</p>
        <button onClick={increaseCount}>Aumentar</button>
        <button onClick={decreaseCount}>Diminuir</button>
        <button onClick={resetCount}>Zerar</button>
      </div>
    </>
  )
}

export default App
