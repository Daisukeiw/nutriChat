import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';
import { ChatBotIcon } from '../chatbot/ChatBotIcon';
import { useAuth } from "../../firebaseconfig/useAuth";
import { useState, useEffect } from 'react';
import { auth, db } from "../../firebaseconfig/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

const Cabecalho = () => {
    const usuario = useAuth(); // Verifica se o usuário está autenticado
    const [profileImage, setProfileImage] = useState(""); // Estado para a imagem de perfil

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                const userDocRef = doc(db, "users", userId); // Referência ao documento no Firestore
                const userSnapshot = await getDoc(userDocRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    setProfileImage(userData.profileImage || ""); // Carregar a imagem de perfil
                }
            }
        };

        fetchUserData();
    }, [usuario]);

    return (
        <div className={style.Cabecalho}>
            <div className={style.Cabecalho_logo}>
                <Link to="/"> 
                    <h1> 
                        <span>Nutri</span>
                        Chat
                    </h1>
                </Link>
            </div>
            <div className={style.Cabecalho_menu}>
                <Link to="/">
                    Home
                </Link>
                {usuario ? ( // Exibe "Consultar" e a imagem de perfil apenas se o usuário estiver autenticado
                    <>
                    <Link to="/consultar" className={style.Cabecalho_consultar}>
                        Consultar
                        <ChatBotIcon />
                    </Link>
                    <Link to="/perfil" className={style.Cabecalho_editarPerfil}>
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Imagem de Perfil"
                                className={style.Cabecalho_profileImage}
                            />
                        ) : (
                            <span>Editar Perfil</span>
                        )}
                    </Link>
                    </>
                ) : (
                <Link to="/login">
                    <span>
                        Login/Cadastrar
                    </span>
                </Link>
                )}
            </div>
        </div>
    );
};

export { Cabecalho };