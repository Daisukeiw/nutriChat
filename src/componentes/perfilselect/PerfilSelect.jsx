import style from "./Select.module.css";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseconfig/firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const PerfilSelect = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    // Carregar informações do usuário logado
    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                const userDoc = doc(db, "users", userId);
                const userSnapshot = await getDoc(userDoc);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    setNome(userData.nome || "");
                    setTelefone(userData.telefone || "");
                    setEmail(userData.email || "");
                }
            }
        };

        fetchUserData();
    }, []);

    const handleUpdateProfile = async () => {
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const userDoc = doc(db, "users", userId);

            try {
                await updateDoc(userDoc, {
                    nome,
                    telefone,
                });
                alert("Perfil atualizado com sucesso!");
            } catch (error) {
                console.error("Erro ao atualizar o perfil:", error);
                alert("Não foi possível atualizar o perfil. Tente novamente.");
            }
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Usuário deslogado.");
            alert("Você foi deslogado com sucesso!");
            window.location.href = "/login"; // Redirect to the login page
        } catch (error) {
            console.error("Erro ao deslogar:", error);
            alert("Não foi possível deslogar. Tente novamente.");
        }
    };

    return (
        <div className={style.profileContainer}>
            <h2 className={style.profileTitle}>Configurações da conta</h2>
            <div className={style.profileSection}>
                <div className={style.profileActions}>

                    <div>
                    <p>E-mail</p>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className={`${style.profileInput} ${style.profileInputDisabled}`}
                        />
                    </div>
                    <div>
                        <p>Nome</p>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={style.profileInput}
                        />
                    </div>
                    <div>
                        <p>Telefone</p>
                        <input
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className={style.profileInput}
                        />
                    </div>
                    
                    <div className={style.profileButtons}>
                        <button className={style.profileButton} onClick={handleUpdateProfile}>
                            Salvar Alterações
                        </button>
                    
                        <button className={style.profileButton} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PerfilSelect };