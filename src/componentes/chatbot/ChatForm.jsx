import { useRef } from 'react';
import style from './Chatbot.module.css';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if( !userMessage) return;
    inputRef.current.value = "";

    
    //Update chat history with the user's message
    setChatHistory(history => [...history, {role: "user", text: userMessage }]);

    // Add a "Thinking..." placeholder for the bot's response
    setTimeout(() => setChatHistory(history => [...history, {role: "model", text: "Pensando..." }]), 600);

    // Call the function to generate the bot's response
    generateBotResponse([...chatHistory, {role: "user", text: userMessage }]);

}
    return (
        <form action="#" className={style.chatForm} onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder='Fale sobre sua refeição...' className={style.messageInput} required />
            <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </form>
    )
}

export { ChatForm }