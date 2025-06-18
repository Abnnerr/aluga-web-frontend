import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const Abas = () => {
  const [selected, setSelected] = useState("Comprar");
  const {filtro, atualizarFiltro} = useContext(UsuarioContext)
  return (
    <div className="flex items-center rounded-lg ">
      <button
        className={`w-[191px] h-[53px] rounded-tl-lg  text-lg font-medium border duration-700 cursor-pointer ${
          filtro.modalidade === "Comprar"
            ? "text-white border-red-600"
            : "bg-gray-200 text-black border-gray-300"
        } duration-700`}
        style={{
          backgroundColor: filtro.modalidade === "Comprar" ? "#E04300" : "#f0f0f0",
        }}
        onClick={() => atualizarFiltro("modalidade","Comprar")}
      >
        Comprar
      </button>
      <button
        className={`w-[193px] h-[53px]  rounded-tr-lg text-lg font-medium border duration-700 cursor-pointer ${
          filtro.modalidade === "Alugar"
            ? "text-white border-red-600"
            : "bg-gray-200 text-black border-gray-300"
        }`}
        style={{
          backgroundColor: filtro.modalidade === "Alugar" ? "#E04300" : "#f0f0f0",
        }}
        onClick={() => atualizarFiltro("modalidade", "Alugar")}
      >
        Alugar
      </button>
    </div>
  );
};

export default Abas;
