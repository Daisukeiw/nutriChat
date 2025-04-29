import { useRef, useEffect, useState } from 'react'
import style from './Chatbot.module.css'
import { ChatBotIcon } from './ChatBotIcon'
import { ChatForm } from './ChatForm'
import { ChatMessage } from './ChatMessage'


const Chatbot = () => {

    const [chatHistory, setChatHistory] = useState([]);

    const chatBodyRef = useRef();


    const generateBotResponse = async (history) => {
        // Helper function to update chat history
        const updateHistory = (text) => {
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Pensando..."), {role: "model", text}]);
        }

        // Format chat history for API request
        history = history.map(({role, text}) => ({role, parts:[{text}] }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history })
        }

        try {
            // Make the API call to get the bot's response
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();

            if(!response.ok) throw new Error(data.error.message || "Alguma coisa deu errado!");

            // Clean and update chat history with bot's response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

            updateHistory(apiResponseText);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        // Auto-scroll whenever chat history updates
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }, [chatHistory])

    return (
        <div className={style.bodyContainer }>
        
            <div className={style.container}>
                <div className={style.chatbotPopup}>
                    <div className={style.chatHeader}>
                        {/*Header do chatbot*/}
                        <div className={style.headerInfo}>
                            <ChatBotIcon />
                            <h2 className={style.logoText}>
                            <span>Nutri</span>Chat
                            </h2>
                        </div>
                    </div>

                    {/*body do chatbot*/}
                    <div ref={chatBodyRef} className={style.chatBody}>
                        <div className={`${style.message} ${style.botMessage}`}>
                            <ChatBotIcon />
                            <p className={style.messageText}>
                                Olá, tudo bem? Posso saber qual foi sua refeição hoje?
                            </p>
                        </div>

                        {/* Render the chat history dynamically */}
                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat} />
                        ))}
                        
                    </div>
                    {/*footer do chatbot*/}
                    <div className={style.chatFooter}>
                        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export { Chatbot }