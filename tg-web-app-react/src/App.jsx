import { useEffect } from "react"
import "./App.css"

const App = () => {
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export { App }
