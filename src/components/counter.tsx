import { useCounter } from "../store/use-counter";

export function Counter() {
  const { count, increaseCount, decreaseCount, resetCount  } = useCounter();

  return (
    <>
      <div>
        <p>Quantidade 2: {count}</p>
        <button onClick={increaseCount}>Aumentar</button>
        <button onClick={decreaseCount}>Diminuir</button>
        <button onClick={resetCount}>Zerar</button>
      </div>
    </>
  )
}