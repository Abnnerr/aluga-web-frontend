import { useContext, useRef } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { useNavigate } from "react-router";

const Localizacao = () => {
    const { filtro, atualizarFiltro } = useContext(UsuarioContext)
    let navigate = useNavigate()
    const localRef = useRef()

    function apagarEstado() {
        atualizarFiltro("estado", "")
        navigate('/')
    }
    function pegarLocal(event) {
        if (event.key === "Enter") {
            atualizarFiltro("local", localRef.current.value)
        }

    }
    function apagarLocal() {
        atualizarFiltro("local", "")
    }
    return (
        <div className="font-bold flex flex-col gap-[10px] relative">
            <h3>Localização</h3>
            <input type="text" className="w-[338px] h-[54px] rounded-lg border focus:outline-[#E04300] pl-[40px]" placeholder="Digite o Bairro, Rua ou Cidade" onKeyDown={pegarLocal} ref={localRef} />
            <box-icon type='solid' name='map' className="fill-[#959595] absolute top-[78px] left-[40px] w-[20px] -z-1"></box-icon>
            <div className="flex gap-[15px]">
                {
                    filtro.estado ? (
                        <button className="bg-[#E04300] px-[10px] w-[100px] py-[5px] rounded-[10px] flex items-center justify-between text-[white] font-bold cursor-pointer">
                            {filtro.estado}
                            <box-icon type='solid' name='tag-x' color="white" className="cursor-pointer" onClick={apagarEstado}></box-icon>
                        </button>
                    ) : navigate("/")
                }
                {
                    filtro.local ? (
                        <button className="bg-[#E04300] px-[10px] w-[120px] py-[5px] rounded-[10px] flex items-center justify-between text-[white] font-bold cursor-pointer">
                            {filtro.local}
                            <box-icon type='solid' name='tag-x' color="white" className="cursor-pointer" onClick={apagarLocal}></box-icon>
                        </button>
                    ) : <></>
                }
            </div>
        </div>
    );
}

export default Localizacao;