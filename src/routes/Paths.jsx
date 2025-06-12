import { BrowserRouter, Route, Routes } from "react-router";
import PageNotFound from "../pages/PageNotFound";
import PageLayout from "../layout/PageLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Imoveis from "../pages/Imoveis";
import Cadastro from "../pages/Cadastro";


const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />} >
                        <Route index element={<Home />} />
                        <Route path="/imoveis" element={<Imoveis />} />
                    </Route>
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;