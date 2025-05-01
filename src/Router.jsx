import { Route, Routes, Navigate } from "react-router-dom";
import { Cadastrar, Consultar, Home, Perfil, LoginPage } from "./pages";
import { LayoutPadrao } from "./layouts";
import { useAuth } from "./firebaseconfig/useAuth";

const Router = () => {
  const usuario = useAuth(); // Verifica se o usuário está autenticado

  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route index element={<Home />} />
        <Route
          path="/consultar"
          element={usuario ? <Consultar /> : <Navigate to="/login" />} // Protege a rota
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route
          path="/perfil"
          element={usuario ? <Perfil /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
};

export { Router };