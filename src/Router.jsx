import { Route, Routes } from "react-router-dom";
import { Cadastrar, Consultar, Home, Perfil, LoginPage } from "./pages";
import { LayoutPadrao } from "./layouts";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route index element={<Home />}/>
        <Route path="/consultar" element={ <Consultar />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/cadastrar" element={<Cadastrar />}/>
        <Route path="/perfil" element={ <Perfil /> }/>
      </Route>
    </Routes>
  );
};

export { Router };