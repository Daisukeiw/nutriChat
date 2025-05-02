import { useState } from 'react';
import style from './cadastro.module.css'; 
import { auth, db } from "../../firebaseconfig/firebaseconfig"; 
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'; // Corrigido para usar o Link do react-router-dom

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Criar o usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Salvar os dados no Firestore
      await setDoc(doc(db, "users", userId), {
        nome,
        telefone,
        email,
      });

      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
    }
  };

  return (
    <div className={style.bodycadastro}>
      <div className={style.container}>
        <div className={style.formImage}>
          <h1>Você já possui uma conta?</h1>
          <div className={style.loginButton}>
              <Link to ="/login"><button>Login</button></Link>
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
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  required
                />
              </div>

              <div className={style.inputBox}>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  placeholder="(XX) XXXXX-XXXX"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                  required
                />
              </div>

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