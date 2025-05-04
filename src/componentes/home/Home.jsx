import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { ChatBotIcon } from '../chatbot/ChatBotIcon';
import { useAuth } from '../../firebaseconfig/useAuth';

const HomeComponent = () => {
  const usuario = useAuth(); // Verifica se o usuário está autenticado
  return (
    <>
    <section className={style.containerIntroducao}>
        <div className={style.informacoes}>
          <div className={style.cardInformacoes}>
            <h1>
              <span>Nutri</span>
              Chat
            </h1>
            <p>
            NutriChat é o assistente nutricional inteligente que faltava na sua rotina. Com ele, você descobre se a sua refeição foi realmente saudável em poucos segundos. Basta dizer o que comeu, e o NutriChat analisa os alimentos, calcula as calorias aproximadas e ainda te dá um feedback completo sobre a qualidade da refeição. Se exagerou, ele avisa. Se foi equilibrado, ele elogia. E, claro, sempre com dicas personalizadas para te ajudar a melhorar no próximo prato.
            </p>
              {usuario ? (
                <Link to="/consultar">Consultar</Link>
              ) : (
                <Link to="/login">Consultar</Link>
              )}
          </div>
        </div>
        <div className={style.elementoVisual}>
          <ChatBotIcon />
          <h2 className={style.titleform}>Consulte-nos!</h2>
        </div>
    </section>
    <section className={style.containerSobre}>
    </section>
    </>
  );
};

export { HomeComponent };