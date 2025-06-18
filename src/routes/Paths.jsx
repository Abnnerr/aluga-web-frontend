import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import PageNotFound from "../pages/PageNotFound";
import PageLayout from "../layout/PageLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Imoveis from "../pages/Imoveis";
import CadastroImoveis from "../pages/CadastroImoveis";
import Favorito from "../pages/Favorito";


const Paths = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />} >
                        <Route index element={<Home />} />
                        <Route path="/imoveis" element={<Imoveis />} />
                    </Route>
                    <Route path="/favoritos" element={<Favorito />} />
                    <Route path="/cadastro-imoveis" element={<CadastroImoveis />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;