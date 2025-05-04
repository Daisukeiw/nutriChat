
import style from './Home.module.css';
import { HomeComponent } from '../../componentes/home/Home.jsx'; // Certifique-se de que o caminho está correto

const Home = () => {
  return (
    <div className={style.homeWrapper}>
      <HomeComponent /> {/* Renderiza o componente importado */}
    </div>
  );
};

export { Home };