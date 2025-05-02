import { useState } from 'react';
import style from './cadastro.module.css'; 
import { auth } from "../../firebaseconfig/firebaseconfig"; 
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignIn = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    // Aqui você pode salvar `firstname` e `telefone` no Firestore se quiser
  };

  return (
    <div className={style.bodycadastro}>
    <div className={style.container}>
      <div className={style.formImage}>
        <h1>Você já possui uma conta?</h1>
        <div className={style.loginButton}>
          <button>
            <a href="#">Login</a>
          </button>
        </div>
      </div>

      <div className={style.form}>
        <form onSubmit={handleSignIn}>
          <div className={style.formHeader}>
            <div className={style.title}>
              <h1>Cadastre-se</h1>
            </div>
          </div>

          <div className={style.inputGroup}>
            <div className={style.inputBox}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Fulano@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={style.inputBox}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={style.singupButton}>
            <button type="submit">Cadastrar-se</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export { Cadastro };