import { Link } from 'react-router-dom'
import style from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
            <div className={style.Cabecalho_logo}>
                <Link to="/"> 
                    <h1> 
                        <span>Nutri</span>
                        Chat
                    </h1>
                </Link>
            </div>
            <div className={style.Cabecalho_menu}>
                <Link to="/">
                    Home
                </Link>
                <Link to="/consultar"> 
                    Consultar
                </Link>
                <Link to="/login">
                    <span>
                        Login/Cadastrar
                    </span>
                </Link>
            </div>
            
        </div>
    )
}

export { Cabecalho }