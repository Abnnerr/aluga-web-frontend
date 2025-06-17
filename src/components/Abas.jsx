import { useState } from "react";

const Abas = () => {
  const [selected, setSelected] = useState("Comprar");

  return (
    <div className="flex items-center rounded-lg ">
      <button
        className={`w-[191px] h-[53px] rounded-tl-lg  text-lg font-medium border duration-700 cursor-pointer ${
          selected === "Comprar"
            ? "text-white border-red-600"
            : "bg-gray-200 text-black border-gray-300"
        } duration-700`}
        style={{
          backgroundColor: selected === "Comprar" ? "#E04300" : "#f0f0f0",
        }}
        onClick={() => setSelected("Comprar")}
      >
        Comprar
      </button>
      <button
        className={`w-[191px] h-[53px]  rounded-tr-lg text-lg font-medium border duration-700 cursor-pointer ${
          selected === "Alugar"
            ? "text-white border-red-600"
            : "bg-gray-200 text-black border-gray-300"
        }`}
        style={{
          backgroundColor: selected === "Alugar" ? "#E04300" : "#f0f0f0",
        }}
        onClick={() => setSelected("Alugar")}
      >
        Alugar
      </button>
    </div>
  );
};

export default Abas;
