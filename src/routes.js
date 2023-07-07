import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from "./pages/Contato";
import BarraNavegacao from "./components/BarraNavegacao";
import NotFound from "./pages/NotFound";
import Produto from "./pages/Produto";


export default function RoutesApp(){
  return (
    <BrowserRouter>
      <BarraNavegacao/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/produto/:id" element={<Produto/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
} 