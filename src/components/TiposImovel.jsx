import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const TiposImovel = () => {
    const [selected, setSelected] = useState(1);
    const {filtro, atualizarFiltro} = useContext(UsuarioContext)
    
    return (
        <div className="flex flex-col gap-2 ">
            <h6 className="text-[16px] font-bold">Tipo de imóveis</h6>
            <div className="flex gap-6">
                {["Casa", "Apartamento"].map((tipo) => (
                    <button
                        key={tipo}
                        onClick={() => atualizarFiltro('tipoImovel', tipo)}
                        className={`px-4 py-3 rounded-[8px] text-lg font-medium border text-white cursor-pointer duration-700`}
                        style={{
                            backgroundColor: filtro.tipoImovel === tipo ? "#E04300" : "#E0430033",
                            borderColor: filtro.tipoImovel === tipo ? "#E04300" : "#E0430033",
                            color: filtro.tipoImovel === tipo ? "white" : "#E04300B2",
                            fill: filtro.tipoImovel == tipo ? "white": "#E04300B2"
                        }}
                    >
                        {
                            (tipo == "Apartamento") ? (
                                <>
                                    <div className="flex flex-col items-center">
                                        <box-icon name='buildings' color="white"></box-icon>
                                        Apartamento
                                    </div>
                                </>
                            ) :
                                <>
                                    <div className="flex flex-col items-center">
                                        <box-icon name='home' color="white"></box-icon>
                                        Casa
                                    </div>
                                </>
                        }
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TiposImovel
