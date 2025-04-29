import { Link } from 'react-router-dom'
import style from './Cabecalho.module.css'
import { ChatBotIcon } from '../chatbot/ChatBotIcon'

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
                <Link to="/consultar" className={style.Cabecalho_consultar}>
                    
                    Consultar
                    <ChatBotIcon />
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