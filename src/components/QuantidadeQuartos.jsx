
import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const QuantidadeQuartos = () => {
  // const [selected, setSelected] = useState(1);
  const {filtro, atualizarFiltro} = useContext(UsuarioContext)

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-lg font-semibold mb-4">Quantidade de quartos</h2>
      <div className="flex gap-4">
        {["1", "2", "3", "4"].map((num) => (
          <button
            key={num}
            onClick={() => atualizarFiltro("quarto", num)}
            className={`w-[72px] h-[54px] rounded-[8px] text-lg font-medium border text-white cursor-pointer duration-700`}
            style={{
              backgroundColor: filtro.quarto === num ? "#E04300" : "#E0430033",
              borderColor: filtro.quarto === num ? "#E04300" : "#E0430033",
              color: filtro.quarto === num ? "white" : "#E04300B2"
            }}
          >
            +{num}
          </button>
        ))}
      </div>
    </div>
  );
};



export default QuantidadeQuartos;