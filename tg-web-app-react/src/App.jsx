import { useEffect } from "react"
import "./App.css"
const tg = window.Telegram.WebApp

const App = () => {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export { App }
