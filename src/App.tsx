import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Receitas from "./pages/Receitas/Receitas"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Receitas/:nome" element={<Receitas/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
