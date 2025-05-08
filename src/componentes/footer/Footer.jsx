import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
        <div className={style.footerContent}>
          <p>&copy; 2025 NutriChat. Todos os direitos reservados.</p>
          <div className={style.footerLinks}>
            <a href="/sobrenos" className={style.footerLink}>
              Sobre
            </a>
            <a href="/privacidade" className={style.footerLink}>
              Política de Privacidade
            </a>
            <a href="/contato" className={style.footerLink}>
              Contato
            </a>
          </div>
        </div>
      </footer>
    )
}

export { Footer };