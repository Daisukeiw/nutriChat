import { Route, Routes } from "react-router-dom"
import { Cadastrar, Consultar, Home, Login, Perfil } from "./pages"
import { LayoutPadrao } from "./layouts"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao/>}>
                <Route path="/" element={<Home />} />
                <Route path="/consultar" element={<Consultar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/perfil" element={<Perfil />} />
            </Route>
        </Routes>
    )
}
export { Router }