import React from 'react';
import style from './home.module.css';

const HomeComponent = () => {
  return (
    <div className={style.content1}>
        <div className={style.n1text}>
        <h1>Explore e Converse com nosso assistente fitness</h1>
         <img src="/imgs/imgbot.png" alt="Assistente Fitness" />
        </div>
      

    </div>
    
    
  );
};

export { HomeComponent };