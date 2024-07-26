import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "./pages/About/About.tsx"
import { Header } from "./components/Header/Header.tsx"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}
