import style from "./Select.module.css";
import React from "react";
import { updateEmail, updatePassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig/firebaseconfig";

const PerfilSelect = () => {
    const handleEmailChange = async () => {
        const newEmail = prompt("Digite o novo e-mail:");
        if (newEmail) {
            try {
                await updateEmail(auth.currentUser, newEmail);
                console.log(`E-mail alterado para: ${newEmail}`);
                alert("E-mail atualizado com sucesso!");
            } catch (error) {
                console.error("Erro ao atualizar o e-mail:", error);
                alert("Não foi possível atualizar o e-mail. Tente novamente.");
            }
        }
    };

    const handlePasswordChange = async () => {
        const newPassword = prompt("Digite a nova senha:");
        if (newPassword) {
            try {
                await updatePassword(auth.currentUser, newPassword);
                console.log(`Senha alterada para: ${newPassword}`);
                alert("Senha atualizada com sucesso!");
            } catch (error) {
                console.error("Erro ao atualizar a senha:", error);
                alert("Não foi possível atualizar a senha. Tente novamente.");
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
                        <button className={style.profileButton} onClick={handleEmailChange}>
                            Alterar E-mail
                        </button>
                    </div>
                    <div>
                        <p>Senha</p>
                        <button className={style.profileButton} onClick={handlePasswordChange}>
                            Alterar Senha
                        </button>
                    </div>
                    <div>
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