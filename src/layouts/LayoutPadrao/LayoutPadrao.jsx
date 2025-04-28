import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo } from "../../componentes"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho />
            <Conteudo>
            <Outlet />
            </Conteudo>

        </>
    )
}

export { LayoutPadrao }