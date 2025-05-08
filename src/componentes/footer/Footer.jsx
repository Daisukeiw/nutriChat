import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
        <div className={style.footerContent}>
          <p>&copy; 2025 NutriChat. Todos os direitos reservados.</p>
          <div className={style.footerLinks}>
            <div className={style.footerLink}>
              <Link to="/sobrenos">Sobre</Link>
            </div>
            <div className={style.footerLink}>
              <Link to="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </footer>
    )
}

export { Footer };