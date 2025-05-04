import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig/firebaseconfig"; 
import style from './login.module.css';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login realizado com sucesso!");
      window.location.href = "/consultar"; // Redirecionar para o perfil
    } catch (err) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    
    <div className={style.loginBorder}>
      <h2 className={style.titleform}>Welcome Back :)</h2>
      <div className={style.loginContainer}>
        <form className={style.loginForm} onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="suasenha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={style.botaocontent}>
          <button type="submit">Entrar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p className={style.registerText}>
            Ainda não tem uma conta? <a href="/cadastrar">Cadastrar-se</a>
          </p>
          </div>
        </form>
      </div>
    </div>
    
  );
  
};

export default Login;