import style from './Chatbot.module.css'
import { ChatBotIcon } from './ChatBotIcon'

const ChatMessage = ({chat}) => {
    return (
        <div className={`${style.message} ${style[`${chat.role === 'model' ? 'bot' : 'user'}Message`]}`}>
            
            {chat.role === 'model' && <ChatBotIcon/>}
            <p className={style.messageText}>
                {chat.text}
            </p>
        </div>
    )
}

export { ChatMessage }