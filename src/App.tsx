import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "./pages/About/About.tsx"
import { Header } from "./components/Header/Header.tsx"
import Payment from "./pages/Payment/Payment.tsx"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}
