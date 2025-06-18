import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { UsuarioContext } from "../contexts/UsuarioContext";

const Home = () => {
    const {filtro,atualizarFiltro} = useContext(UsuarioContext)
    let estados = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
        "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
        "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
        "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
        "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
    ]
    let estadoRef = useRef()
    const navigate = useNavigate()

    function pegarEstado() {
        atualizarFiltro("estado", estadoRef.current.value)
        navigate('/imoveis')
    }
    return (
        <div className="px-[50px] flex justify-between items-center">
            <div className="">
                <div className="flex flex-col gap-[10px] relative *:font-bold">
                    <h3 className="text-[30px] font-bold ml-[10px]">Onde você quer morar</h3>
                    <input list="estados" type="text" className="w-[500px] h-[60px] pl-[60px] border-[#E04300] border-2  rounded-[50px] focus:outline-[#E0430070] duration-700" ref={estadoRef} />
                    <datalist id="estados">
                        {
                            estados.map((estado) => (
                                <option key={estado} value={estado} />
                            ))
                        }
                    </datalist>
                    <box-icon type='solid' name='map' className="fill-[#E04300] absolute left-7 top-18"></box-icon>
                    <button className="bg-[#E04300] px-5 py-2 rounded-[20px] text-white absolute right-2 top-16 cursor-pointer" onClick={pegarEstado}>Buscar</button>
                </div>
            </div>
            <img src="src/assets/imgmulher.png" alt="" className="h-[450px] mt-16 " />
        </div>
    );
}

export default Home;



