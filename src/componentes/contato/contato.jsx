import { useState } from 'react';
import style from './contato.module.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [motivo, setMotivo] = useState('');
  const [categoria, setCategoria] = useState(''); // Estado para o dropdown

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado por entrar em contato, ${nome}!\nMotivo: ${categoria}\nMensagem: ${motivo}`);
    setNome('');
    setEmail('');
    setMotivo('');
    setCategoria('');
  };

  return (
    <div className={style.bodycontato}>
      <div className={style.container}>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            <div className={style.formHeader}>
              <div className={style.title}>
                <h1>CONTATE-NOS</h1>
              </div>
            </div>

            <div className={style.inputGroup}>
              <div className={style.inputBox}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className={style.inputBox}>
                <label htmlFor="categoria">Selecione o motivo</label>
                <select
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  required
                  className={style.select}
                >
                  <option value="" disabled>-- Qual o Motivo Do Contato --</option>
                  <option value="chatbot">Tô com problemas com o chatbot</option>
                  <option value="login">Tô com problemas no login</option>
                  <option value="cadastro">Não consigo me cadastrar</option>
                  <option value="alterar-info">Não consigo alterar minhas informações</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className={style.inputBox}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={style.inputBox}>
                <label htmlFor="motivo">Conte-nos mais sobre isso</label>
                <textarea
                  id="motivo"
                  placeholder="Descreva o motivo do contato"
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  required
                  className={style.textarea}
                />
              </div>
            </div>

            <div className={style.submitbutton}>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contato };
