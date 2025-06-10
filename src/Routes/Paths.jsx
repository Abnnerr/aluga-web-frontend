import { BrowserRouter, Route, Routes } from "react-router";
import Imoveis from "../components/imoveis";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/imoveis" element={<Imoveis />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
