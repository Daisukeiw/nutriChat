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
      <div className={style.itens}>
        <div className={style.item}>
          <h2>Sobre o NutriChat</h2>
          <p>
            O NutriChat é um assistente virtual que utiliza inteligência artificial para ajudar você a entender melhor suas refeições. Ele analisa os alimentos, calcula as calorias e fornece feedback sobre a qualidade da sua dieta.
          </p>
        </div>
        <div className={style.item}>
          <h2>Como Funciona</h2>
          <p>
            Basta informar o que você comeu e o NutriChat faz o resto. Ele fornece informações detalhadas sobre os alimentos, calorias e dicas para melhorar sua alimentação.
          </p>
        </div>
        <div className={style.item}>
          <h2>Benefícios</h2>
          <p>
            Com o NutriChat, você pode ter uma alimentação mais saudável, receber dicas personalizadas e entender melhor suas escolhas alimentares.
          </p>
        </div>
      </div>
    </section>
    <section className={style.timeline}>

    </section>
    </>
  );
};

export { HomeComponent };