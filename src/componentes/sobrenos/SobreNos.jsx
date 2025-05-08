
import { FaGithub, FaInstagram } from 'react-icons/fa'; // Importa os ícones
import sobreNosimg1 from '../../assets/imgs/sobreNosimg1.png';
import sobreNosimg2 from '../../assets/imgs/sobreNosimg2.jpg'
import murillo from '../../assets/imgs/murillo-perfil.jpg';
import rafael from '../../assets/imgs/rafael-perfil.jpg';
import vinicius from '../../assets/imgs/vinicius-perfil.jpg';
import vitor from '../../assets/imgs/vitor-perfil.jpg';

import style from './SobreNos.module.css';
const SobreNos = () => {
    return (
        <div className={style.card}>
            <div className={style.container}>
                {/* Seção principal */}
                <div className={style.mainSection}>
                    <div className={style.textSection}>
                        <h1>Sobre Nós</h1>
                        <p>
                            O NutriChat nasceu da combinação entre tecnologia e nutrição para revolucionar a forma como você cuida da sua alimentação. 
                            Nosso chatbot inteligente foi desenvolvido para oferecer respostas rápidas sobre calorias, nutrientes e dietas, 
                            usando IA para simplificar sua rotina alimentar.
                        </p>
                    </div>
                    <div className={style.imageSection}>
                        <img
                            src= {sobreNosimg1}
                            alt="Equipe da empresa"
                            className={style.image}
                        />
                    </div>
                </div>

                {/* Seção de Missão */}
                <div className={style.missionSection}>
                    <div className={style.missionImage}>
                        <img
                            src={sobreNosimg2}
                            alt="Missão da empresa"
                            className={style.image}
                        />
                    </div>
                    <div className={style.missionText}>
                        <h2>Nossa Missão</h2>
                        <p>
                            Democratizar o acesso à informação nutricional, eliminando barreiras complexas. Acreditamos que tecnologia e saúde devem andar juntas para:
                        </p>
                        <ul>
                            <li>✔ Facilitar o cálculo de calorias e nutrientes.</li>
                            <li>✔ Educar sobre alimentação balanceada de forma descomplicada.</li>
                            <li>✔ Personalizar dicas para seus objetivos (perda de peso, ganho de massa, etc.).</li>
                        </ul>
                    </div>
                </div>

                {/* Seção de Responsáveis */}
                <div className={style.teamSection}>
                    <h2>Time por Trás do NutriChat</h2>
                    <div className={style.teamGrid}>
                        <div className={style.teamMember}>
                            <img src={murillo} alt="Programador 1" />
                            <p>Murillo Castro</p>
                            <div className={style.socialIcons}>
                                <a href="https://github.com/Muca5" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/murillo.cxstro/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className={style.teamMember}>
                            <img src={rafael}  alt="Programador 2" />
                            <p>Rafael Lopes</p>
                            <div className={style.socialIcons}>
                                <a href="https://github.com/RafaelFLopes" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/rafxnzz/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className={style.teamMember}>
                            <img src={vinicius}  alt="Programador 3" />
                            <p>Vinicius Rodrigues</p>
                            <div className={style.socialIcons}>
                                <a href="https://github.com/viniciusrrodrigues" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/vinnyzl.07/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <div className={style.teamMember}>
                        <img src={vitor}  alt="Programador 4" />
                            <p>Vitor Iwamoto</p>
                            <div className={style.socialIcons}>
                                <a href="https://github.com/Daisukeiw" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/daisuke.iw4/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SobreNos };