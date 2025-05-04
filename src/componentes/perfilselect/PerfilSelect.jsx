import style from "./Select.module.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig/firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const PerfilSelect = () => {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [profileImage, setProfileImage] = useState(""); // Estado para a imagem de perfil
    const [loading, setLoading] = useState(true); // Estado de carregamento

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                const userDocRef = doc(db, "users", userId); // Referência ao documento no Firestore
                const userSnapshot = await getDoc(userDocRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    setNome(userData.nome || "");
                    setTelefone(userData.telefone || "");
                    setEmail(userData.email || "");
                    setProfileImage(userData.profileImage || ""); // Carregar a imagem de perfil
                } else {
                    console.error("Documento do usuário não encontrado.");
                }
            } else {
                console.error("Usuário não autenticado.");
            }
            setLoading(false); // Finaliza o carregamento
        };

        fetchUserData();
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result); // Atualiza a imagem codificada em Base64
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Firebase signOut
            alert("Você foi deslogado com sucesso!");
            window.location.href = "/login"; // Redireciona para a página de login
        } catch (error) {
            console.error("Erro ao deslogar:", error);
            alert("Não foi possível deslogar. Tente novamente.");
        }
    };

    const handleUpdateProfile = async () => {
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const userDocRef = doc(db, "users", userId); // Referência ao documento no Firestore

            try {
                await updateDoc(userDocRef, {
                    nome,
                    telefone,
                    profileImage, // Atualiza a imagem de perfil no Firestore
                });
                alert("Perfil atualizado com sucesso!");
            } catch (error) {
                console.error("Erro ao atualizar o perfil:", error);
                alert("Não foi possível atualizar o perfil. Tente novamente.");
            }
        }
    };

    if (loading) {
        return (
            <div className={style.loadingContainer}>
                <p className={style.loadingText}>Carregando dados...</p>
            </div>
        );
    }

    return (
        <div className={style.profileContainer}>
            <h2 className={style.profileTitle}>Configurações da conta</h2>
            <div className={style.profileSection}>
                <div className={style.profileActions}>
                    <div className={style.imageContainer}>
                        <p>Imagem de Perfil</p>
                        {profileImage && (
                            <img
                                src={profileImage}
                                alt="Imagem de Perfil"
                                className={style.profileImage}
                            />
                        )}
                        <label htmlFor="fileUpload" className={style.fileUploadLabel}>
                            Escolher Imagem
                        </label>
                        <input
                            type="file"
                            id="fileUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={style.fileInput} // Esconde o input real
                        />
                        {profileImage && (
                            <p className={style.fileName}>Imagem selecionada!</p>
                        )}
                    </div>
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
                        <button className={style.logoutButton} onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PerfilSelect };