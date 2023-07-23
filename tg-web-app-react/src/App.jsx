import { useEffect } from "react"
import { useTelegram } from "./components/hooks/useTelegram"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { ProductList } from "./components/ProductList/ProductList"
import { Form } from "./components/Form/Form"
import "./App.css"


const App = () => {
  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </>
  )
}

export { App }
