import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { AXIOS } from "../services";




const Card = ({
    imovelId,
    // imagem,
    logradouro,
    bairro,
    descricao,
    area,
    quarto,
    garagem,
    banheiro,
    preco,
    logado,
}) => {

    const {usuario, setUsuario, imoveis} = useContext(UsuarioContext)
    async function favoritar() {

        try {
            let dados = {
                usuario_id: usuario.usuario_id,
                imovel_id: imovelId
            }
            const request =  AXIOS.post('/favoritos', dados)
            alert(request.data)
        } catch (error) {
            alert("deuRuim")
        }


    }


    return (
        <div className="flex bg-white rounded-lg  shadow p-4 mb-4 border">
            <img
                src="src/assets/casa.png"
                alt="Foto do imóvel"
                className="w-[280px] h-[180px] object-cover rounded-lg"
            />
            <div className="flex-1 flex flex-col w-full justify-between px-6">
                <div>
                    <p className="font-bold text-gray-800">{logradouro}</p>
                    <p className="text-gray-500">{bairro}</p>
                    <p className="mt-2 text-gray-700 whitespace-pre-line">{descricao}</p>
                </div>
                <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
                    <span>{area}m²</span>
                    <span className="flex items-center gap-1">
                        <box-icon name="bed"></box-icon>
                        <p className="">{quarto} Quartos</p>
                    </span>
                    <span className="flex items-center gap-1">
                        <box-icon name="car"></box-icon> {garagem} Garagem
                    </span>
                    <span className="flex items-center gap-1">
                        <box-icon name="bath"></box-icon> {banheiro} Banheiro
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end min-w-[120px]">

                {
                    logado && (
                        <>
                            <button className="  bg-orange-100 p-3  rounded-xl hover:bg-orange-200  duration-700 text-center flex items-center">
                                <box-icon name="heart" color="#DF4300" className="cursor-pointer" onClick={favoritar}></box-icon>
                            </button>
                            <div className="flex flex-col gap-[20px]">
                                <div className="text-[#DF4300] font-bold text-2xl">{preco}</div>
                                <a className="mt-2 cursor-pointer  bg-orange-100 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-200 duration-700">
                                    Contatar
                                </a>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default Card;

