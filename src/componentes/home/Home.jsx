import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { ChatBotIcon } from '../chatbot/ChatBotIcon';
import { useAuth } from '../../firebaseconfig/useAuth';
import comida from '../../assets/imgs/food.png';
import beneficios from '../../assets/imgs/chart.png';
import engrenagem from '../../assets/imgs/cogwheel.png';
import pratoComida from '../../assets/imgs/comidaPrato.png';

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
      <h1 className={style.titleSobre}>INFORMAÇÕES</h1>
        <div className={style.itens}>
          <div className={style.item}>
            <div className={style.iconCard}>
              <ChatBotIcon />
            </div>
            <h2>Sobre o NutriChat</h2>
            <p>
              O NutriChat é um assistente virtual que utiliza inteligência artificial para ajudar você a entender melhor suas refeições.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.iconCard}>
            <img src={engrenagem} alt="" />
            </div>
            <h2>Como Funciona</h2>
            <p>
              Basta informar o que você comeu e o NutriChat faz o resto. Ele fornece informações detalhadas sobre os alimentos, calorias e dicas para melhorar sua alimentação.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.iconCard}>
              <img src={beneficios} alt="" />
            </div>
            <h2>Benefícios</h2>
            <p>
              Com o NutriChat, você pode ter uma alimentação mais saudável, receber dicas personalizadas e entender melhor suas escolhas alimentares.
            </p>
          </div>
          <div className={style.item}>
            <div className={style.iconCard}>
              <img src={comida} alt="" />
            </div>
            <h2>Alimentação</h2>
            <p>
            O NutriChat não só calcula calorias, mas também motiva o usuário, elogia boas escolhas, alerta sobre exageros e promove consciência alimentar para uma relação mais saudável com a comida.      
            </p>
          </div>
        </div>
      </section>
    <section className={style.containerInfo}>
      <div className={style.bodyInfo}>
            <h1>REFEIÇÕES SAUDÁVEIS</h1>
            <p>
            Fazer refeições saudáveis vai muito além de contar calorias — é um investimento direto na sua saúde, bem-estar e qualidade de vida. Quando você escolhe alimentos nutritivos e equilibrados, seu corpo recebe os nutrientes certos para funcionar melhor: mais energia para o dia a dia, melhora no humor, fortalecimento do sistema imunológico e até prevenção de doenças como diabetes, hipertensão e obesidade.
            </p>
      </div>
      <div className={style.imagemInfo}>
        <img src={pratoComida} alt="" /> 
      </div>
          
    </section>

    </>
  );
};

export { HomeComponent};