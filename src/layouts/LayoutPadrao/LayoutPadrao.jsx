import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Footer } from "../../componentes"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho />
            <Conteudo>
            <Outlet />
            </Conteudo>
            {/* <Footer /> */}
        </>
    )
}

export { LayoutPadrao }