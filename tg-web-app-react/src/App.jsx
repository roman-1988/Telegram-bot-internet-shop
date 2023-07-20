import { useEffect } from "react"
import { useTelegram } from "./components/hooks/useTelegram"
import "./App.css"

const App = () => {
  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={onToggleButton}>toggle</button>
    </>
  )
}

export { App }
